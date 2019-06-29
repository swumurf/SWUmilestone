/**
date: June 4, 2019
@Author: Ji yoon, Park
Title: Create a server & save it to the AWS RDS database using MYSQL platform / swumurf server 
 */

var express = require('express');
var router = express.Router();
const async = require('async');
const crypto = require('crypto-promise');

const utils = require('../utils/utils');
const statusCode = require('../utils/statusCode');
const responseMessage = require('../utils/responseMessage');
const db = require('../../module/pool');



router.post('/', async (req, res)=>{
    if (!req.body.studentNum || !req.body.password) {
        res.status(200).send(utils.successFalse(statusCode.BAD_REQUEST), responseMessage.NULL_VALUE);
    } else {
        const userInfo = {
            studentNum:req.body.studentNum,
            password:req.body.password,
            salt:null
        }

        const salt=await crypto.randomBytes(32);
        const hashedPassword=await crypto.pbkdf2(userInfo.password.toString(),salt.toString('base64'),1000,32,'SHA512');
        userInfo.salt=salt.toString('base64');

        //DB QUERY 입력
        const selectQuery='SELECT * FROM user WHERE studentNum=?'
        const selectResult=await db.queryParam_Parse(selectQuery,req.body.studentNum);
        console.log('selectResult : ', selectResult);

        //쿼리 조회 실패 시
        if(!selectResult){
            res.status(200).send(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR,responseMessage.LOGIN_FAIL));
        } else{
            res.status(200).send(utils.successTrue(statusCode.OK,responseMessage.LOGIN_SUCCESS));
        }
        

    }
    // var resjson = JSON.stringify({
    //     str: req.body.str
    // });
    // res.status(200).json(resjson);
});
module.exports = router;