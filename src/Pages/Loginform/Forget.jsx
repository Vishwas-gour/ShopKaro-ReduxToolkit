import { useState } from "react";
import { otpGenerator } from "../../Functions/starPrint";
import axios from "axios";

function Forget() {
    const [visibleReque, setVisibleReque] = useState(true);
    const [visibleOtp, setVisibleOtp] = useState(false);
    const [visibleNewField, setVisibleNewField] = useState(false);

    const [otp, setOtp] = useState({ "inputOtp": "", "sendedOtp": "" });
    const [formInfo, setFormInfo] = useState({ "gmail": "", "password": "", "passwordCnf": "" })

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormInfo(pre => ({ ...pre, [name]: value }));
    }
    function checkOtp() {
        if (otp.inputOtp == otp.sendedOtp) {
            alert("right otp");
            setVisibleOtp(false);
            setVisibleNewField(true)
        } else {
            alert("wrong otp")
        }
    }

    async function checkVelidation(e) {

        if (!formInfo.gmail) {
            alert("all fielt are mendotary");
            return;
        }
        setOtp(pre => ({ ...pre, "sendedOtp": otpGenerator(4) }))
        setVisibleReque(false)
        setVisibleOtp(true)
    }
    function otpSet(e) {
        let value = e.target.value;
        setOtp(pre => ({ ...pre, "inputOtp": value }))
    }
    async function checkPassword() {
         if(formInfo.password != formInfo.passwordCnf){
            alert("password not maching")
            return;
        }
        else{
        // ==================[PASSWORD UPDATED]==================
             let api = `http://localhost:3000/loginInfo/?gmail=${formInfo.gmail}`;
             const res = await axios.get(api);
             const id = res.data[0].id;
             let apiId = `http://localhost:3000/loginInfo/${id}`;
             
             axios.patch(apiId,{password:formInfo.password}).then(res=>{
                alert("Password Updated")
             });

         }
    }

    return (
        <div className="login_container">
            <div className="login_form" id="login_page">
                <form onSubmit={handleSubmit}>
                    <h3>Forgot Password</h3>

                    <div className="input_box">
                        <label htmlFor="gmail">Email</label>
                        <input type="text" id="gmail" name="gmail" placeholder="Enter email address" value={formInfo.gmail} onChange={handleInput} />
                    </div>
                    {(visibleReque &&
                        <>
                            <button onClick={(e) => checkVelidation(e)}>Request OTP</button>
                        </>
                    )}

                    {(visibleOtp &&

                        <div className='otp-login'>
                            <input className="otpInput" type="text" maxLength="4" placeholder='Enter OTP' value={otp.inputOtp} onChange={(e) => otpSet(e)} />
                            <button onClick={checkOtp}>Verify OTP</button>
                        </div>
                    )}
                    {(visibleNewField) ? (
                        <>
                            <div className="input_box">
                                <div className="forget-password">   <label htmlFor="password">Password</label>   </div>
                                <input type="password" id="password" name="password" placeholder="Create new password" onChange={handleInput} />
                            </div>
                            <div className="input_box">
                                <input type="password" id="password" name="passwordCnf" placeholder="Confirn new password" onChange={handleInput} />
                            </div>
                            <button onClick={checkPassword}>Update Password</button>
                        </>
                    ) : (<> </>)}



                </form>
            </div>
        </div>
    );
}

export default Forget