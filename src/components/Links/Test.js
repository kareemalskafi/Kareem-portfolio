import React, { useState } from "react";
import { Container, Row, Col , Alert } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { BsFillExclamationCircleFill } from "react-icons/bs"; // أيقونة التحذير



const PasswordProtectedContent = () => {
  const [password, setPassword] = useState(""); // حالة لتخزين كلمة المرور المدخلة
  const [authState, setAuthState] = useState(null); // حالة لتخزين حالة المصادقة (المحتوى المعروض)
  const [showError, setShowError] = useState(false); // حالة لعرض التحذير
  const [attempts, setAttempts] = useState(0); // عدد المحاولات
  const [timeRemaining, setTimeRemaining] = useState(0); // الوقت المتبقي للانتظار بين المحاولات
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // حالة لتعطيل الزر بين المحاولات

  // دالة لمعالجة الإدخال والتحقق من كلمة المرور
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

  return (
    <Container>
    <div style={{marginTop:"400px"}}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <Button
        onClick={handlePasswordSubmit}
        disabled={isButtonDisabled} // تعطيل الزر في حالة الانتظار
      >
        Submit
      </Button>

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

      {authState === "123" && (
        <div>
          <h3>محتوى 1</h3>
          <p>لقد قمت بإدخال كلمة المرور الصحيحة.</p>
        </div>
      )}

      {authState === "1" && (
        <div>
          <h3>محتوى 2</h3>
          <p>لقد قمت بإدخال كلمة المرور الصحيحة.</p>
        </div>
      )}
    </div>
    </Container>
  );
};

export default PasswordProtectedContent;
