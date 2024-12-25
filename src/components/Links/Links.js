import React, { useState } from "react";
import { Container, Row, Col , Alert } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { BsFillExclamationCircleFill } from "react-icons/bs"; // أيقونة التحذير


function Links() {
  // إدارة حالة كلمة المرور
  const [authState, setAuthState] = useState(""); // "123" أو "1" لتحديد الحالة
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // للتحكم في ظهور التحذير
  const [attempts, setAttempts] = useState(0); // عدد المحاولات
  const [timeRemaining, setTimeRemaining] = useState(0); // الوقت المتبقي للانتظار بين المحاولات
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // حالة لتعطيل الزر بين المحاولات


  // التعامل مع إدخال كلمة المرور
  const handlePasswordSubmit = () => {
    setShowError(false); // إخفاء التحذير عند المحاولة
    if (isButtonDisabled) {
      setShowError(true); // إظهار تحذير الانتظار إذا كان الزر معطلًا
      return;
    }

    if (password === "123") {
      setAuthState("123"); // عرض المحتوى الأول
      setShowError(false); // إخفاء التحذير
    } else if (password === "1") {
      setAuthState("1"); // عرض المحتوى الثاني
      setShowError(false); // إخفاء التحذير
    } else {
      setShowError(true); // عرض التحذير عند إدخال كلمة مرور خاطئة
      setAttempts(prev => prev + 1); // زيادة عدد المحاولات
    }

    if (attempts >= 2) {
      // إذا كانت المحاولات أكثر من مرتين
      setIsButtonDisabled(true); // تعطيل الزر
      setTimeRemaining(5); // تعيين الوقت المتبقي لمدة 5 ثانية
    }
  };

    // دالة لتقليل الوقت المتبقي بين المحاولات
    React.useEffect(() => {
      let timer;
      if (isButtonDisabled && timeRemaining > 0) {
        timer = setInterval(() => {
          setTimeRemaining((prev) => prev - 1);
        }, 1000);
      } else if (timeRemaining === 0) {
        setIsButtonDisabled(false); // تمكين الزر بعد انتهاء الوقت
      }
  
      return () => clearInterval(timer); // تنظيف المؤقت عند انتهاء التوقيت
    }, [isButtonDisabled, timeRemaining]);

   // إعادة تعيين حالة كلمة المرور والمحتوى
   const handleReset = () => {
    setPassword(""); // مسح كلمة المرور المدخلة
    setAuthState(""); // إعادة حالة المصادقة إلى البداية
    setShowError(false); // إخفاء التحذير
    setIsButtonDisabled(false);
    setAttempts(0);
    setTimeRemaining(0);



  };

  return (
    <Container>
      {/* تحقق إذا كانت المصادقة صحيحة */}
      {!authState ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>أدخل كلمة المرور للوصول إلى المحتوى</h2>
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <br />
          <Button variant="primary"  onClick={handlePasswordSubmit} disabled={isButtonDisabled}>
            إدخال
          </Button>

             {/* إذا كانت كلمة المرور خاطئة، يتم عرض التحذير */}
             {showError && (
        <Alert
          variant="danger"
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            padding: "15px",
            fontSize: "1.1rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
          }}
        >
          <BsFillExclamationCircleFill
            style={{ marginRight: "10px", fontSize: "1.5rem" }}
          />
          <strong>خطأ!</strong>{" "}
          {attempts >= 3
            ? `لقد تجاوزت الحد الأقصى للمحاولات. يرجى الانتظار ${timeRemaining} ثانية قبل المحاولة مرة أخرى.`
            : "كلمة المرور غير صحيحة. حاول مرة أخرى."}
        </Alert>
      )}

        </div>
      ) : authState === "123" ? (
        // المحتوى الأول إذا كانت كلمة المرور 123
        <Container className="home-content">

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media</h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>


            </Row>


            <Button variant="secondary" onClick={handleReset}>
            تحديث / إدخال كلمة مرور جديدة
          </Button>


        </Container>
      ) : authState === "1" ? (
        // المحتوى الثاني إذا كانت كلمة المرور 1
        <Container className="home-content">

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>          

          <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            <Col md={4} className="home-header">
              <h1 className="hyper-link">Social Media </h1>

               <Button variant="primary" href="https://google.com/" target="_blank" style={{margin:"7px"}}>1. Google</Button>

               <Button variant="primary" href="https://facebook.com/" target="_blank" style={{margin:"7px"}}>2. Facebook</Button>

               <Button variant="primary" href="https://www.youtube.com/" target="_blank" style={{margin:"7px"}}>3. Youtube</Button>

               <Button variant="primary" href="https://linkediin.com/" target="_blank" style={{margin:"7px"}}>4. Linkedin</Button>
            </Col>

            </Row>


            <Button variant="secondary" onClick={handleReset}>
            تحديث / إدخال كلمة مرور جديدة
          </Button>


        </Container>

      ) : null}

      <Particle/>
    </Container>
    
  );
}

export default Links;





