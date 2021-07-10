{
    // Enum
    // 여러가지의 상수를 모아서 관리 해 줄수 있는 녀석이다.
    // 하지만 사용하지 않는 것이 좋다 이유는 : enum으로 지정된 변수는 다른 어떤 숫자도 할당할 수 있다는게 문제다
    //JavaScript
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    //freeze는 수정이 안되게 말 그대로 꽁꽁 얼려서 고정시켜놓는 API다
    var DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    //TypeScript
    //시작하는 값을 1로 하고 싶으면 처음 값만 바꿔주면 된다
    //아에 다른 값으료 표기를 원하면 똑같이 값을 대입해주면 된다.
    var DAYS = void 0;
    (function (DAYS) {
        DAYS[DAYS["Monday"] = 0] = "Monday";
        DAYS[DAYS["Tuesday"] = 1] = "Tuesday";
        DAYS[DAYS["Wednesday"] = 2] = "Wednesday";
        DAYS[DAYS["Thursday"] = 3] = "Thursday";
        DAYS[DAYS["Friday"] = 4] = "Friday";
        DAYS[DAYS["Satarday"] = 5] = "Satarday";
        DAYS[DAYS["Sunday"] = 6] = "Sunday";
    })(DAYS || (DAYS = {}));
    console.log(DAYS.Friday);
    var day = DAYS.Satarday;
    console.log(day);
}
