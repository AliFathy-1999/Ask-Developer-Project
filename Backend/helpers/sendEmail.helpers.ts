const userModel:any = require('../DB/Models/userModel');
const API_KEY = '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';
const sgMail = require('@sendgrid/mail')
var d = new Date
const afterSomeMinutes = [d.getMonth()+1,d.getDate(),d.getFullYear()].join('/')+' '+ new Date(new Date().getTime() + 30 * 60000).toTimeString().split(' ')[0];
let generateOTP = () => {
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const code= generateOTP();

const sendEmail=async (recieveremail:any,token:any)=>{
    try {
        sgMail.setApiKey(API_KEY)
            const user = await userModel.findOne({email:recieveremail});
            const verifyUser = await userModel.findOneAndUpdate({email:recieveremail},
                {
                    $set:{verify:{code:code,expire:afterSomeMinutes,status:false,token:token}}
            },{new:true});
            await verifyUser.save();
        const msg = {
            to: recieveremail, 
            from: 'Admin: Ali Fathi <AskDeveloperWebsite@gmail.com>', 
            subject: 'Forget Password',
            text: 'and easy to do anywhere, even with Node.js',
            html:`
            <center><img src="https://res.cloudinary.com/dtkiqzfmq/image/upload/v1664750610/asklogo_lligiq.png"></center>
            <h1>Forget password no problem</h1>
            <center>
            <img src="https://cdn-icons-png.flaticon.com/512/6195/6195696.png" alt="askdeveloperlogo" />
            </center>
            <div>
            <a href="http://localhost:4200/verifying?token_id=${token}" >Click on to Verify your Email from this link</a>
            </div>
            <h3 style="font-weight:bold;">OTP : ${code}</h3>
            <strong>OTP Expires in 30 minutes => ${afterSomeMinutes}</strong>
            `
          }
          sgMail.send(msg)
        
    } catch (error:any) {
        console.log(error)
    }
}
module.exports = sendEmail;
