<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?
    $tomail = "justmoretz@naver.com";
        
        function error($text){
        echo "
        <script language=javascript>
            window.alert('$text')
                history.go(-1)
                </script>";
        exit;
    }
    
    function msg($text){
        echo "
        <script language=javascript>
        window.alert('$text')
        top.location.href = 'formtest.html'
        </script>
        ";
        exit;
    }
    
    if(!$name) {
        error('성명을 적어');
    }
    
    if(!$sex) {
        error('성별을 선택');
    }
    
    $body = "이름 : $name \r\n";
    $body = "성별 : $sex \r\n";
    $body = "직업 : $job \r\n";
    
    $result=mail($tomail , $subject , $body , $mailheaders);
    if($result) {
        msg('메일 발송 완료');
    }
    else {
        error('메일 발송 실패');
    }
    ?>
    
</body>
</html>