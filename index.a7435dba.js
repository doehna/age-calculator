
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
const $14308410f8b0e190$export$854f1880e14a3d0f = "This field is required";
const $14308410f8b0e190$export$fdc5644089e8d0dc = "The date is incorrect";
const $14308410f8b0e190$export$558afb482112b4de = "Must be a valid day";
const $14308410f8b0e190$export$214d571e21a0e4d1 = "Must be a valid month";
const $14308410f8b0e190$export$deb9a9b25c639598 = "Must be a valid year";
const $14308410f8b0e190$export$81b1b52cbeed96fd = "Must be in the past";
const $14308410f8b0e190$export$8d34a8e2e1d6bcc1 = "";
const $14308410f8b0e190$export$27b7b95a5fde2b31 = " ";


var $0482955508687de3$exports = {};
"use strict";
var $a61a3c644f111cd7$exports = {};

$parcel$export($a61a3c644f111cd7$exports, "add", () => $a61a3c644f111cd7$export$e16d8520af44a096, (v) => $a61a3c644f111cd7$export$e16d8520af44a096 = v);
var $a61a3c644f111cd7$export$e16d8520af44a096;
"use strict";
$a61a3c644f111cd7$export$e16d8520af44a096 = $a61a3c644f111cd7$var$add;
var $286d3700a480f77f$exports = {};

$parcel$export($286d3700a480f77f$exports, "addDays", () => $286d3700a480f77f$export$dd412b56f1e4d8aa, (v) => $286d3700a480f77f$export$dd412b56f1e4d8aa = v);
var $286d3700a480f77f$export$dd412b56f1e4d8aa;
"use strict";
$286d3700a480f77f$export$dd412b56f1e4d8aa = $286d3700a480f77f$var$addDays;
var $d6ca5188bd94f9d4$exports = {};

$parcel$export($d6ca5188bd94f9d4$exports, "toDate", () => $d6ca5188bd94f9d4$export$e67a095c620b86fe, (v) => $d6ca5188bd94f9d4$export$e67a095c620b86fe = v);
var $d6ca5188bd94f9d4$export$e67a095c620b86fe;
"use strict";
$d6ca5188bd94f9d4$export$e67a095c620b86fe = $d6ca5188bd94f9d4$var$toDate;
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ function $d6ca5188bd94f9d4$var$toDate(argument) {
    const argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
    else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") // TODO: Can we get rid of as?
    return new Date(argument);
    else // TODO: Can we get rid of as?
    return new Date(NaN);
}


var $8079cc2f427f92af$exports = {};

$parcel$export($8079cc2f427f92af$exports, "constructFrom", () => $8079cc2f427f92af$export$ead8a1812b171991, (v) => $8079cc2f427f92af$export$ead8a1812b171991 = v);
var $8079cc2f427f92af$export$ead8a1812b171991;
"use strict";
$8079cc2f427f92af$export$ead8a1812b171991 = $8079cc2f427f92af$var$constructFrom;
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */ function $8079cc2f427f92af$var$constructFrom(date, value) {
    if (date instanceof Date) return new date.constructor(value);
    else return new Date(value);
}


/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */ function $286d3700a480f77f$var$addDays(date, amount) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (isNaN(amount)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    if (!amount) // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}


var $e2a3756ff857361a$exports = {};

$parcel$export($e2a3756ff857361a$exports, "addMonths", () => $e2a3756ff857361a$export$17c93e242b2d3a22, (v) => $e2a3756ff857361a$export$17c93e242b2d3a22 = v);
var $e2a3756ff857361a$export$17c93e242b2d3a22;
"use strict";
$e2a3756ff857361a$export$17c93e242b2d3a22 = $e2a3756ff857361a$var$addMonths;


/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */ function $e2a3756ff857361a$var$addMonths(date, amount) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (isNaN(amount)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    if (!amount) // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
    const dayOfMonth = _date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    const endOfDesiredMonth = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, _date.getTime());
    endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
    else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return _date;
    }
}




/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */ function $a61a3c644f111cd7$var$add(date, duration) {
    const { years: years = 0, months: months = 0, weeks: weeks = 0, days: days = 0, hours: hours = 0, minutes: minutes = 0, seconds: seconds = 0 } = duration;
    // Add years and months
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const dateWithMonths = months || years ? (0, $e2a3756ff857361a$export$17c93e242b2d3a22)(_date, months + years * 12) : _date;
    // Add weeks and days
    const dateWithDays = days || weeks ? (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(dateWithMonths, days + weeks * 7) : dateWithMonths;
    // Add days, hours, minutes and seconds
    const minutesToAdd = minutes + hours * 60;
    const secondsToAdd = seconds + minutesToAdd * 60;
    const msToAdd = secondsToAdd * 1000;
    const finalDate = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, dateWithDays.getTime() + msToAdd);
    return finalDate;
}


Object.keys($a61a3c644f111cd7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a61a3c644f111cd7$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a61a3c644f111cd7$exports[key];
        }
    });
});
var $4fc6464b8d09c3e7$exports = {};

$parcel$export($4fc6464b8d09c3e7$exports, "addBusinessDays", () => $4fc6464b8d09c3e7$export$f087b9ada3136ae9, (v) => $4fc6464b8d09c3e7$export$f087b9ada3136ae9 = v);
var $4fc6464b8d09c3e7$export$f087b9ada3136ae9;
"use strict";
$4fc6464b8d09c3e7$export$f087b9ada3136ae9 = $4fc6464b8d09c3e7$var$addBusinessDays;

var $592a4b42e5b20212$exports = {};

$parcel$export($592a4b42e5b20212$exports, "isSaturday", () => $592a4b42e5b20212$export$def9f260655b3a76, (v) => $592a4b42e5b20212$export$def9f260655b3a76 = v);
var $592a4b42e5b20212$export$def9f260655b3a76;
"use strict";
$592a4b42e5b20212$export$def9f260655b3a76 = $592a4b42e5b20212$var$isSaturday;

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */ function $592a4b42e5b20212$var$isSaturday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 6;
}


var $f1ce360f186fb315$exports = {};

$parcel$export($f1ce360f186fb315$exports, "isSunday", () => $f1ce360f186fb315$export$70f720dfc6028987, (v) => $f1ce360f186fb315$export$70f720dfc6028987 = v);
var $f1ce360f186fb315$export$70f720dfc6028987;
"use strict";
$f1ce360f186fb315$export$70f720dfc6028987 = $f1ce360f186fb315$var$isSunday;

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */ function $f1ce360f186fb315$var$isSunday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 0;
}


var $f2cc1bbbb36bdd33$exports = {};

$parcel$export($f2cc1bbbb36bdd33$exports, "isWeekend", () => $f2cc1bbbb36bdd33$export$618d60ea299da42, (v) => $f2cc1bbbb36bdd33$export$618d60ea299da42 = v);
var $f2cc1bbbb36bdd33$export$618d60ea299da42;
"use strict";
$f2cc1bbbb36bdd33$export$618d60ea299da42 = $f2cc1bbbb36bdd33$var$isWeekend;

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */ function $f2cc1bbbb36bdd33$var$isWeekend(date) {
    const day = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay();
    return day === 0 || day === 6;
}



/**
 * @name addBusinessDays
 * @category Date Extension Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be added.
 *
 * @returns The new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */ function $4fc6464b8d09c3e7$var$addBusinessDays(date, amount) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const startedOnWeekend = (0, $f2cc1bbbb36bdd33$export$618d60ea299da42)(_date);
    if (isNaN(amount)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    const hours = _date.getHours();
    const sign = amount < 0 ? -1 : 1;
    const fullWeeks = Math.trunc(amount / 5);
    _date.setDate(_date.getDate() + fullWeeks * 7);
    // Get remaining days not part of a full week
    let restDays = Math.abs(amount % 5);
    // Loops over remaining days
    while(restDays > 0){
        _date.setDate(_date.getDate() + sign);
        if (!(0, $f2cc1bbbb36bdd33$export$618d60ea299da42)(_date)) restDays -= 1;
    }
    // If the date is a weekend day and we reduce a dividable of
    // 5 from it, we land on a weekend date.
    // To counter this, we add days accordingly to land on the next business day
    if (startedOnWeekend && (0, $f2cc1bbbb36bdd33$export$618d60ea299da42)(_date) && amount !== 0) {
        // If we're reducing days, we want to add days until we land on a weekday
        // If we're adding days we want to reduce days until we land on a weekday
        if ((0, $592a4b42e5b20212$export$def9f260655b3a76)(_date)) _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
        if ((0, $f1ce360f186fb315$export$70f720dfc6028987)(_date)) _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
    }
    // Restore hours to avoid DST lag
    _date.setHours(hours);
    return _date;
}


Object.keys($4fc6464b8d09c3e7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4fc6464b8d09c3e7$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4fc6464b8d09c3e7$exports[key];
        }
    });
});

Object.keys($286d3700a480f77f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $286d3700a480f77f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $286d3700a480f77f$exports[key];
        }
    });
});
var $d144a8e63ad6ffd7$exports = {};

$parcel$export($d144a8e63ad6ffd7$exports, "addHours", () => $d144a8e63ad6ffd7$export$4a4306ad4fa0e5e6, (v) => $d144a8e63ad6ffd7$export$4a4306ad4fa0e5e6 = v);
var $d144a8e63ad6ffd7$export$4a4306ad4fa0e5e6;
"use strict";
$d144a8e63ad6ffd7$export$4a4306ad4fa0e5e6 = $d144a8e63ad6ffd7$var$addHours;
var $1bfcccd7bade19ee$exports = {};

$parcel$export($1bfcccd7bade19ee$exports, "addMilliseconds", () => $1bfcccd7bade19ee$export$baf757aaf0c95c94, (v) => $1bfcccd7bade19ee$export$baf757aaf0c95c94 = v);
var $1bfcccd7bade19ee$export$baf757aaf0c95c94;
"use strict";
$1bfcccd7bade19ee$export$baf757aaf0c95c94 = $1bfcccd7bade19ee$var$addMilliseconds;


/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */ function $1bfcccd7bade19ee$var$addMilliseconds(date, amount) {
    const timestamp = +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, timestamp + amount);
}


var $14ce387571ca9ade$export$7271e9e3478110d1;
var $14ce387571ca9ade$export$34804a017b31e2fe;
var $14ce387571ca9ade$export$be1dccf2de902d31;
var $14ce387571ca9ade$export$8e6600bbdee7dabb;
var $14ce387571ca9ade$export$a77c1a7ebebe2a5a;
var $14ce387571ca9ade$export$698aec755e92c695;
var $14ce387571ca9ade$export$815a9362476d2fe3;
var $14ce387571ca9ade$export$4db7641526e3241f;
var $14ce387571ca9ade$export$80d7e435f744f319;
var $14ce387571ca9ade$export$3c58128db900d44e;
var $14ce387571ca9ade$export$3633035e63cee86a;
var $14ce387571ca9ade$export$ab7da2ccd1075c38;
var $14ce387571ca9ade$export$f2f5ae5a8e2d8f9f;
var $14ce387571ca9ade$export$2423174df8cd3cd2;
var $14ce387571ca9ade$export$4dec998e48f9c246;
var $14ce387571ca9ade$export$4fad13613e88edc8;
var $14ce387571ca9ade$export$397c2d5776aa9055;
var $14ce387571ca9ade$export$91246f0b9bd9beff;
var $14ce387571ca9ade$export$7f72910d6dfd237a;
var $14ce387571ca9ade$export$b76b1809a2898f9a;
var $14ce387571ca9ade$export$81caae6e1cc7a622;
var $14ce387571ca9ade$export$3913210603d8e9ae;
var $14ce387571ca9ade$export$dfd9b671c89acc8e;
"use strict";
$14ce387571ca9ade$export$7271e9e3478110d1 = $14ce387571ca9ade$export$34804a017b31e2fe = $14ce387571ca9ade$export$be1dccf2de902d31 = $14ce387571ca9ade$export$8e6600bbdee7dabb = $14ce387571ca9ade$export$a77c1a7ebebe2a5a = $14ce387571ca9ade$export$698aec755e92c695 = $14ce387571ca9ade$export$815a9362476d2fe3 = $14ce387571ca9ade$export$4db7641526e3241f = $14ce387571ca9ade$export$80d7e435f744f319 = $14ce387571ca9ade$export$3c58128db900d44e = $14ce387571ca9ade$export$3633035e63cee86a = $14ce387571ca9ade$export$ab7da2ccd1075c38 = $14ce387571ca9ade$export$f2f5ae5a8e2d8f9f = $14ce387571ca9ade$export$2423174df8cd3cd2 = $14ce387571ca9ade$export$4dec998e48f9c246 = $14ce387571ca9ade$export$4fad13613e88edc8 = $14ce387571ca9ade$export$397c2d5776aa9055 = $14ce387571ca9ade$export$91246f0b9bd9beff = $14ce387571ca9ade$export$7f72910d6dfd237a = $14ce387571ca9ade$export$b76b1809a2898f9a = $14ce387571ca9ade$export$81caae6e1cc7a622 = $14ce387571ca9ade$export$3913210603d8e9ae = $14ce387571ca9ade$export$dfd9b671c89acc8e = void 0; /**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ 
/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ const $14ce387571ca9ade$var$daysInWeek = $14ce387571ca9ade$export$dfd9b671c89acc8e = 7;
/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */ const $14ce387571ca9ade$var$daysInYear = $14ce387571ca9ade$export$3913210603d8e9ae = 365.2425;
/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */ const $14ce387571ca9ade$var$maxTime = $14ce387571ca9ade$export$81caae6e1cc7a622 = Math.pow(10, 8) * 86400000;
/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */ const $14ce387571ca9ade$var$minTime = $14ce387571ca9ade$export$4dec998e48f9c246 = -$14ce387571ca9ade$var$maxTime;
/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */ const $14ce387571ca9ade$var$millisecondsInWeek = $14ce387571ca9ade$export$4fad13613e88edc8 = 604800000;
/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */ const $14ce387571ca9ade$var$millisecondsInDay = $14ce387571ca9ade$export$b76b1809a2898f9a = 86400000;
/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */ const $14ce387571ca9ade$var$millisecondsInMinute = $14ce387571ca9ade$export$91246f0b9bd9beff = 60000;
/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */ const $14ce387571ca9ade$var$millisecondsInHour = $14ce387571ca9ade$export$7f72910d6dfd237a = 3600000;
/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */ const $14ce387571ca9ade$var$millisecondsInSecond = $14ce387571ca9ade$export$397c2d5776aa9055 = 1000;
/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */ const $14ce387571ca9ade$var$minutesInYear = $14ce387571ca9ade$export$3633035e63cee86a = 525600;
/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */ const $14ce387571ca9ade$var$minutesInMonth = $14ce387571ca9ade$export$ab7da2ccd1075c38 = 43200;
/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */ const $14ce387571ca9ade$var$minutesInDay = $14ce387571ca9ade$export$2423174df8cd3cd2 = 1440;
/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */ const $14ce387571ca9ade$var$minutesInHour = $14ce387571ca9ade$export$f2f5ae5a8e2d8f9f = 60;
/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */ const $14ce387571ca9ade$var$monthsInQuarter = $14ce387571ca9ade$export$3c58128db900d44e = 3;
/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */ const $14ce387571ca9ade$var$monthsInYear = $14ce387571ca9ade$export$80d7e435f744f319 = 12;
/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */ const $14ce387571ca9ade$var$quartersInYear = $14ce387571ca9ade$export$4db7641526e3241f = 4;
/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */ const $14ce387571ca9ade$var$secondsInHour = $14ce387571ca9ade$export$698aec755e92c695 = 3600;
/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */ const $14ce387571ca9ade$var$secondsInMinute = $14ce387571ca9ade$export$a77c1a7ebebe2a5a = 60;
/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */ const $14ce387571ca9ade$var$secondsInDay = $14ce387571ca9ade$export$815a9362476d2fe3 = $14ce387571ca9ade$var$secondsInHour * 24;
/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */ const $14ce387571ca9ade$var$secondsInWeek = $14ce387571ca9ade$export$34804a017b31e2fe = $14ce387571ca9ade$var$secondsInDay * 7;
/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */ const $14ce387571ca9ade$var$secondsInYear = $14ce387571ca9ade$export$7271e9e3478110d1 = $14ce387571ca9ade$var$secondsInDay * $14ce387571ca9ade$var$daysInYear;
/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */ const $14ce387571ca9ade$var$secondsInMonth = $14ce387571ca9ade$export$8e6600bbdee7dabb = $14ce387571ca9ade$var$secondsInYear / 12;
/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */ const $14ce387571ca9ade$var$secondsInQuarter = $14ce387571ca9ade$export$be1dccf2de902d31 = $14ce387571ca9ade$var$secondsInMonth * 3;


/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added.
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */ function $d144a8e63ad6ffd7$var$addHours(date, amount) {
    return (0, $1bfcccd7bade19ee$export$baf757aaf0c95c94)(date, amount * $14ce387571ca9ade$export$7f72910d6dfd237a);
}


Object.keys($d144a8e63ad6ffd7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d144a8e63ad6ffd7$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d144a8e63ad6ffd7$exports[key];
        }
    });
});
var $b899fb2f6f812365$exports = {};

$parcel$export($b899fb2f6f812365$exports, "addISOWeekYears", () => $b899fb2f6f812365$export$c8240694da10d5f, (v) => $b899fb2f6f812365$export$c8240694da10d5f = v);
var $b899fb2f6f812365$export$c8240694da10d5f;
"use strict";
$b899fb2f6f812365$export$c8240694da10d5f = $b899fb2f6f812365$var$addISOWeekYears;
var $f406a700497c04bb$exports = {};

$parcel$export($f406a700497c04bb$exports, "getISOWeekYear", () => $f406a700497c04bb$export$3dbc52535f6f8fcc, (v) => $f406a700497c04bb$export$3dbc52535f6f8fcc = v);
var $f406a700497c04bb$export$3dbc52535f6f8fcc;
"use strict";
$f406a700497c04bb$export$3dbc52535f6f8fcc = $f406a700497c04bb$var$getISOWeekYear;

var $a0788919f0f9c7eb$exports = {};

$parcel$export($a0788919f0f9c7eb$exports, "startOfISOWeek", () => $a0788919f0f9c7eb$export$6173213f95a4431e, (v) => $a0788919f0f9c7eb$export$6173213f95a4431e = v);
var $a0788919f0f9c7eb$export$6173213f95a4431e;
"use strict";
$a0788919f0f9c7eb$export$6173213f95a4431e = $a0788919f0f9c7eb$var$startOfISOWeek;
var $ece5c05ada93e803$exports = {};

$parcel$export($ece5c05ada93e803$exports, "startOfWeek", () => $ece5c05ada93e803$export$42c81a444fbfb5d4, (v) => $ece5c05ada93e803$export$42c81a444fbfb5d4 = v);
var $ece5c05ada93e803$export$42c81a444fbfb5d4;
"use strict";
$ece5c05ada93e803$export$42c81a444fbfb5d4 = $ece5c05ada93e803$var$startOfWeek;

var $bdae7381d85d289e$export$430a3269e24b912e;
var $bdae7381d85d289e$export$95365be1b0704abc;
"use strict";
$bdae7381d85d289e$export$430a3269e24b912e = $bdae7381d85d289e$var$getDefaultOptions;
$bdae7381d85d289e$export$95365be1b0704abc = $bdae7381d85d289e$var$setDefaultOptions;
let $bdae7381d85d289e$var$defaultOptions = {};
function $bdae7381d85d289e$var$getDefaultOptions() {
    return $bdae7381d85d289e$var$defaultOptions;
}
function $bdae7381d85d289e$var$setDefaultOptions(newOptions) {
    $bdae7381d85d289e$var$defaultOptions = newOptions;
}


/**
 * The {@link startOfWeek} function options.
 */ /**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */ function $ece5c05ada93e803$var$startOfWeek(date, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ function $a0788919f0f9c7eb$var$startOfISOWeek(date) {
    return (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(date, {
        weekStartsOn: 1
    });
}



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */ function $f406a700497c04bb$var$getISOWeekYear(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (_date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}


var $9941f4bf91b30929$exports = {};

$parcel$export($9941f4bf91b30929$exports, "setISOWeekYear", () => $9941f4bf91b30929$export$814397aabf10ab77, (v) => $9941f4bf91b30929$export$814397aabf10ab77 = v);
var $9941f4bf91b30929$export$814397aabf10ab77;
"use strict";
$9941f4bf91b30929$export$814397aabf10ab77 = $9941f4bf91b30929$var$setISOWeekYear;

var $f4468be34bc84842$exports = {};

$parcel$export($f4468be34bc84842$exports, "differenceInCalendarDays", () => $f4468be34bc84842$export$4a02e9c37dab4871, (v) => $f4468be34bc84842$export$4a02e9c37dab4871 = v);
var $f4468be34bc84842$export$4a02e9c37dab4871;
"use strict";
$f4468be34bc84842$export$4a02e9c37dab4871 = $f4468be34bc84842$var$differenceInCalendarDays;

var $bfe4adcc49a56248$exports = {};

$parcel$export($bfe4adcc49a56248$exports, "startOfDay", () => $bfe4adcc49a56248$export$63fa379ae8a9ba2, (v) => $bfe4adcc49a56248$export$63fa379ae8a9ba2 = v);
var $bfe4adcc49a56248$export$63fa379ae8a9ba2;
"use strict";
$bfe4adcc49a56248$export$63fa379ae8a9ba2 = $bfe4adcc49a56248$var$startOfDay;

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */ function $bfe4adcc49a56248$var$startOfDay(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


var $30ec17c6531dc4b7$export$113002b5eff6e430;
"use strict";
$30ec17c6531dc4b7$export$113002b5eff6e430 = $30ec17c6531dc4b7$var$getTimezoneOffsetInMilliseconds;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ function $30ec17c6531dc4b7$var$getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}


/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */ function $f4468be34bc84842$var$differenceInCalendarDays(dateLeft, dateRight) {
    const startOfDayLeft = (0, $bfe4adcc49a56248$export$63fa379ae8a9ba2)(dateLeft);
    const startOfDayRight = (0, $bfe4adcc49a56248$export$63fa379ae8a9ba2)(dateRight);
    const timestampLeft = +startOfDayLeft - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(startOfDayLeft);
    const timestampRight = +startOfDayRight - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(startOfDayRight);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / $14ce387571ca9ade$export$b76b1809a2898f9a);
}


var $18db251bc9893458$exports = {};

$parcel$export($18db251bc9893458$exports, "startOfISOWeekYear", () => $18db251bc9893458$export$236bdfa374eb69a9, (v) => $18db251bc9893458$export$236bdfa374eb69a9 = v);
var $18db251bc9893458$export$236bdfa374eb69a9;
"use strict";
$18db251bc9893458$export$236bdfa374eb69a9 = $18db251bc9893458$var$startOfISOWeekYear;



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */ function $18db251bc9893458$var$startOfISOWeekYear(date) {
    const year = (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(date);
    const fourthOfJanuary = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(fourthOfJanuary);
}



/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param weekYear - The ISO week-numbering year of the new date
 *
 * @returns The new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */ function $9941f4bf91b30929$var$setISOWeekYear(date, weekYear) {
    let _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(_date, (0, $18db251bc9893458$export$236bdfa374eb69a9)(_date));
    const fourthOfJanuary = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    fourthOfJanuary.setFullYear(weekYear, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    _date = (0, $18db251bc9893458$export$236bdfa374eb69a9)(fourthOfJanuary);
    _date.setDate(_date.getDate() + diff);
    return _date;
}


/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be added.
 *
 * @returns The new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jn 26 2015 00:00:00
 */ function $b899fb2f6f812365$var$addISOWeekYears(date, amount) {
    return (0, $9941f4bf91b30929$export$814397aabf10ab77)(date, (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(date) + amount);
}


Object.keys($b899fb2f6f812365$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b899fb2f6f812365$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b899fb2f6f812365$exports[key];
        }
    });
});

Object.keys($1bfcccd7bade19ee$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1bfcccd7bade19ee$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1bfcccd7bade19ee$exports[key];
        }
    });
});
var $79d244f57af1182c$exports = {};

$parcel$export($79d244f57af1182c$exports, "addMinutes", () => $79d244f57af1182c$export$2287e3d29250119e, (v) => $79d244f57af1182c$export$2287e3d29250119e = v);
var $79d244f57af1182c$export$2287e3d29250119e;
"use strict";
$79d244f57af1182c$export$2287e3d29250119e = $79d244f57af1182c$var$addMinutes;


/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */ function $79d244f57af1182c$var$addMinutes(date, amount) {
    return (0, $1bfcccd7bade19ee$export$baf757aaf0c95c94)(date, amount * $14ce387571ca9ade$export$91246f0b9bd9beff);
}


Object.keys($79d244f57af1182c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $79d244f57af1182c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $79d244f57af1182c$exports[key];
        }
    });
});

Object.keys($e2a3756ff857361a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e2a3756ff857361a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e2a3756ff857361a$exports[key];
        }
    });
});
var $6b82cd1131386c75$exports = {};

$parcel$export($6b82cd1131386c75$exports, "addQuarters", () => $6b82cd1131386c75$export$c252a41d0fbed2ce, (v) => $6b82cd1131386c75$export$c252a41d0fbed2ce = v);
var $6b82cd1131386c75$export$c252a41d0fbed2ce;
"use strict";
$6b82cd1131386c75$export$c252a41d0fbed2ce = $6b82cd1131386c75$var$addQuarters;

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be added.
 *
 * @returns The new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */ function $6b82cd1131386c75$var$addQuarters(date, amount) {
    const months = amount * 3;
    return (0, $e2a3756ff857361a$export$17c93e242b2d3a22)(date, months);
}


Object.keys($6b82cd1131386c75$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $6b82cd1131386c75$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $6b82cd1131386c75$exports[key];
        }
    });
});
var $4305a0c0eee23ec5$exports = {};

$parcel$export($4305a0c0eee23ec5$exports, "addSeconds", () => $4305a0c0eee23ec5$export$3cb31b0df13be68, (v) => $4305a0c0eee23ec5$export$3cb31b0df13be68 = v);
var $4305a0c0eee23ec5$export$3cb31b0df13be68;
"use strict";
$4305a0c0eee23ec5$export$3cb31b0df13be68 = $4305a0c0eee23ec5$var$addSeconds;

/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be added.
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */ function $4305a0c0eee23ec5$var$addSeconds(date, amount) {
    return (0, $1bfcccd7bade19ee$export$baf757aaf0c95c94)(date, amount * 1000);
}


Object.keys($4305a0c0eee23ec5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4305a0c0eee23ec5$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4305a0c0eee23ec5$exports[key];
        }
    });
});
var $24685c5ea669773d$exports = {};

$parcel$export($24685c5ea669773d$exports, "addWeeks", () => $24685c5ea669773d$export$ef501a2bb4f3ee6b, (v) => $24685c5ea669773d$export$ef501a2bb4f3ee6b = v);
var $24685c5ea669773d$export$ef501a2bb4f3ee6b;
"use strict";
$24685c5ea669773d$export$ef501a2bb4f3ee6b = $24685c5ea669773d$var$addWeeks;

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */ function $24685c5ea669773d$var$addWeeks(date, amount) {
    const days = amount * 7;
    return (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(date, days);
}


Object.keys($24685c5ea669773d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $24685c5ea669773d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $24685c5ea669773d$exports[key];
        }
    });
});
var $2c6a0cda03bac7ae$exports = {};

$parcel$export($2c6a0cda03bac7ae$exports, "addYears", () => $2c6a0cda03bac7ae$export$3d83eec43f4ea476, (v) => $2c6a0cda03bac7ae$export$3d83eec43f4ea476 = v);
var $2c6a0cda03bac7ae$export$3d83eec43f4ea476;
"use strict";
$2c6a0cda03bac7ae$export$3d83eec43f4ea476 = $2c6a0cda03bac7ae$var$addYears;

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */ function $2c6a0cda03bac7ae$var$addYears(date, amount) {
    return (0, $e2a3756ff857361a$export$17c93e242b2d3a22)(date, amount * 12);
}


Object.keys($2c6a0cda03bac7ae$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2c6a0cda03bac7ae$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2c6a0cda03bac7ae$exports[key];
        }
    });
});
var $3d386b8aa7ebbca3$exports = {};

$parcel$export($3d386b8aa7ebbca3$exports, "areIntervalsOverlapping", () => $3d386b8aa7ebbca3$export$2bf3385645436101, (v) => $3d386b8aa7ebbca3$export$2bf3385645436101 = v);
var $3d386b8aa7ebbca3$export$2bf3385645436101;
"use strict";
$3d386b8aa7ebbca3$export$2bf3385645436101 = $3d386b8aa7ebbca3$var$areIntervalsOverlapping;

/**
 * The {@link areIntervalsOverlapping} function options.
 */ /**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping unless `inclusive` is set to `true`.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - The object with options
 *
 * @returns Whether the time intervals are overlapping
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
 * )
 * //=> false
 *
 * @example
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */ function $3d386b8aa7ebbca3$var$areIntervalsOverlapping(intervalLeft, intervalRight, options) {
    const [leftStartTime, leftEndTime] = [
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalLeft.start),
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalLeft.end)
    ].sort((a, b)=>a - b);
    const [rightStartTime, rightEndTime] = [
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalRight.start),
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalRight.end)
    ].sort((a, b)=>a - b);
    if (options?.inclusive) return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
    return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}


Object.keys($3d386b8aa7ebbca3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3d386b8aa7ebbca3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3d386b8aa7ebbca3$exports[key];
        }
    });
});
var $f1d030ba1c332a2b$exports = {};

$parcel$export($f1d030ba1c332a2b$exports, "clamp", () => $f1d030ba1c332a2b$export$7d15b64cf5a3a4c4, (v) => $f1d030ba1c332a2b$export$7d15b64cf5a3a4c4 = v);
var $f1d030ba1c332a2b$export$7d15b64cf5a3a4c4;
"use strict";
$f1d030ba1c332a2b$export$7d15b64cf5a3a4c4 = $f1d030ba1c332a2b$var$clamp;
var $8596ddf382780ca2$exports = {};

$parcel$export($8596ddf382780ca2$exports, "max", () => $8596ddf382780ca2$export$8960430cfd85939f, (v) => $8596ddf382780ca2$export$8960430cfd85939f = v);
var $8596ddf382780ca2$export$8960430cfd85939f;
"use strict";
$8596ddf382780ca2$export$8960430cfd85939f = $8596ddf382780ca2$var$max;

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */ function $8596ddf382780ca2$var$max(dates) {
    let result;
    dates.forEach(function(dirtyDate) {
        const currentDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dirtyDate);
        if (result === undefined || result < currentDate || isNaN(Number(currentDate))) result = currentDate;
    });
    return result || new Date(NaN);
}


var $d1c87a2fe7d62d0f$exports = {};

$parcel$export($d1c87a2fe7d62d0f$exports, "min", () => $d1c87a2fe7d62d0f$export$96ec731ed4dcb222, (v) => $d1c87a2fe7d62d0f$export$96ec731ed4dcb222 = v);
var $d1c87a2fe7d62d0f$export$96ec731ed4dcb222;
"use strict";
$d1c87a2fe7d62d0f$export$96ec731ed4dcb222 = $d1c87a2fe7d62d0f$var$min;

/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */ function $d1c87a2fe7d62d0f$var$min(dates) {
    let result;
    dates.forEach((dirtyDate)=>{
        const date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dirtyDate);
        if (!result || result > date || isNaN(+date)) result = date;
    });
    return result || new Date(NaN);
}


/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be bounded
 * @param interval - The interval to bound to
 *
 * @returns The date bounded by the start and the end of the interval
 *
 * @example
 * // What is Mar, 21, 2021 bounded to an interval starting at Mar, 22, 2021 and ending at Apr, 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 */ function $f1d030ba1c332a2b$var$clamp(date, interval) {
    return (0, $d1c87a2fe7d62d0f$export$96ec731ed4dcb222)([
        (0, $8596ddf382780ca2$export$8960430cfd85939f)([
            date,
            interval.start
        ]),
        interval.end
    ]);
}


Object.keys($f1d030ba1c332a2b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f1d030ba1c332a2b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f1d030ba1c332a2b$exports[key];
        }
    });
});
var $7c81f8cc76d2f65c$exports = {};

$parcel$export($7c81f8cc76d2f65c$exports, "closestIndexTo", () => $7c81f8cc76d2f65c$export$42127b72a9d091c7, (v) => $7c81f8cc76d2f65c$export$42127b72a9d091c7 = v);
var $7c81f8cc76d2f65c$export$42127b72a9d091c7;
"use strict";
$7c81f8cc76d2f65c$export$42127b72a9d091c7 = $7c81f8cc76d2f65c$var$closestIndexTo;

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns An index of the date closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */ function $7c81f8cc76d2f65c$var$closestIndexTo(dateToCompare, dates) {
    const date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateToCompare);
    if (isNaN(Number(date))) return NaN;
    const timeToCompare = date.getTime();
    let result;
    let minDistance;
    dates.forEach(function(dirtyDate, index) {
        const currentDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = NaN;
            minDistance = NaN;
            return;
        }
        const distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < minDistance) {
            result = index;
            minDistance = distance;
        }
    });
    return result;
}


Object.keys($7c81f8cc76d2f65c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7c81f8cc76d2f65c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7c81f8cc76d2f65c$exports[key];
        }
    });
});
var $c553bfeca768e540$exports = {};

$parcel$export($c553bfeca768e540$exports, "closestTo", () => $c553bfeca768e540$export$73858b464497125a, (v) => $c553bfeca768e540$export$73858b464497125a = v);
var $c553bfeca768e540$export$73858b464497125a;
"use strict";
$c553bfeca768e540$export$73858b464497125a = $c553bfeca768e540$var$closestTo;


/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */ function $c553bfeca768e540$var$closestTo(dateToCompare, dates) {
    const date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateToCompare);
    if (isNaN(Number(date))) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(dateToCompare, NaN);
    const timeToCompare = date.getTime();
    let result;
    let minDistance;
    dates.forEach((dirtyDate)=>{
        const currentDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = (0, $8079cc2f427f92af$export$ead8a1812b171991)(dateToCompare, NaN);
            minDistance = NaN;
            return;
        }
        const distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < minDistance) {
            result = currentDate;
            minDistance = distance;
        }
    });
    return result;
}


Object.keys($c553bfeca768e540$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c553bfeca768e540$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c553bfeca768e540$exports[key];
        }
    });
});
var $5947c8ea77f34d17$exports = {};

$parcel$export($5947c8ea77f34d17$exports, "compareAsc", () => $5947c8ea77f34d17$export$fe114145ae75d197, (v) => $5947c8ea77f34d17$export$fe114145ae75d197 = v);
var $5947c8ea77f34d17$export$fe114145ae75d197;
"use strict";
$5947c8ea77f34d17$export$fe114145ae75d197 = $5947c8ea77f34d17$var$compareAsc;

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */ function $5947c8ea77f34d17$var$compareAsc(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    else return diff;
}


Object.keys($5947c8ea77f34d17$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $5947c8ea77f34d17$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $5947c8ea77f34d17$exports[key];
        }
    });
});
var $95863907fff45608$exports = {};

$parcel$export($95863907fff45608$exports, "compareDesc", () => $95863907fff45608$export$ed84005ac9356f7a, (v) => $95863907fff45608$export$ed84005ac9356f7a = v);
var $95863907fff45608$export$ed84005ac9356f7a;
"use strict";
$95863907fff45608$export$ed84005ac9356f7a = $95863907fff45608$var$compareDesc;

/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */ function $95863907fff45608$var$compareDesc(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff > 0) return -1;
    else if (diff < 0) return 1;
    else return diff;
}


Object.keys($95863907fff45608$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $95863907fff45608$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $95863907fff45608$exports[key];
        }
    });
});

Object.keys($8079cc2f427f92af$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8079cc2f427f92af$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8079cc2f427f92af$exports[key];
        }
    });
});
var $719468786fc28a7e$exports = {};

$parcel$export($719468786fc28a7e$exports, "constructNow", () => $719468786fc28a7e$export$18c3c6510fb97afc, (v) => $719468786fc28a7e$export$18c3c6510fb97afc = v);
var $719468786fc28a7e$export$18c3c6510fb97afc;
"use strict";
$719468786fc28a7e$export$18c3c6510fb97afc = $719468786fc28a7e$var$constructNow;

/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */ function $719468786fc28a7e$var$constructNow(date) {
    return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, Date.now());
}


Object.keys($719468786fc28a7e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $719468786fc28a7e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $719468786fc28a7e$exports[key];
        }
    });
});
var $e556dc33836cc58a$exports = {};

$parcel$export($e556dc33836cc58a$exports, "daysToWeeks", () => $e556dc33836cc58a$export$66d8b66cbb6006a8, (v) => $e556dc33836cc58a$export$66d8b66cbb6006a8 = v);
var $e556dc33836cc58a$export$66d8b66cbb6006a8;
"use strict";
$e556dc33836cc58a$export$66d8b66cbb6006a8 = $e556dc33836cc58a$var$daysToWeeks;

/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param days - The number of days to be converted
 *
 * @returns The number of days converted in weeks
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses trunc rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */ function $e556dc33836cc58a$var$daysToWeeks(days) {
    const weeks = days / $14ce387571ca9ade$export$dfd9b671c89acc8e;
    const result = Math.trunc(weeks);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}


Object.keys($e556dc33836cc58a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e556dc33836cc58a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e556dc33836cc58a$exports[key];
        }
    });
});
var $3d153485b108bdf5$exports = {};

$parcel$export($3d153485b108bdf5$exports, "differenceInBusinessDays", () => $3d153485b108bdf5$export$f30d3269a6c53cb9, (v) => $3d153485b108bdf5$export$f30d3269a6c53cb9 = v);
var $3d153485b108bdf5$export$f30d3269a6c53cb9;
"use strict";
$3d153485b108bdf5$export$f30d3269a6c53cb9 = $3d153485b108bdf5$var$differenceInBusinessDays;


var $0b5a89a8d61cafc4$exports = {};

$parcel$export($0b5a89a8d61cafc4$exports, "isSameDay", () => $0b5a89a8d61cafc4$export$ea39ec197993aef0, (v) => $0b5a89a8d61cafc4$export$ea39ec197993aef0 = v);
var $0b5a89a8d61cafc4$export$ea39ec197993aef0;
"use strict";
$0b5a89a8d61cafc4$export$ea39ec197993aef0 = $0b5a89a8d61cafc4$var$isSameDay;

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */ function $0b5a89a8d61cafc4$var$isSameDay(dateLeft, dateRight) {
    const dateLeftStartOfDay = (0, $bfe4adcc49a56248$export$63fa379ae8a9ba2)(dateLeft);
    const dateRightStartOfDay = (0, $bfe4adcc49a56248$export$63fa379ae8a9ba2)(dateRight);
    return +dateLeftStartOfDay === +dateRightStartOfDay;
}


var $fe1f9cf876b66eab$exports = {};

$parcel$export($fe1f9cf876b66eab$exports, "isValid", () => $fe1f9cf876b66eab$export$1ea939691cdc45b8, (v) => $fe1f9cf876b66eab$export$1ea939691cdc45b8 = v);
var $fe1f9cf876b66eab$export$1ea939691cdc45b8;
"use strict";
$fe1f9cf876b66eab$export$1ea939691cdc45b8 = $fe1f9cf876b66eab$var$isValid;
var $bd772bba1ace3c63$exports = {};

$parcel$export($bd772bba1ace3c63$exports, "isDate", () => $bd772bba1ace3c63$export$871608497c498473, (v) => $bd772bba1ace3c63$export$871608497c498473 = v);
var $bd772bba1ace3c63$export$871608497c498473;
"use strict";
$bd772bba1ace3c63$export$871608497c498473 = $bd772bba1ace3c63$var$isDate; /**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ 
function $bd772bba1ace3c63$var$isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ function $fe1f9cf876b66eab$var$isValid(date) {
    if (!(0, $bd772bba1ace3c63$export$871608497c498473)(date) && typeof date !== "number") return false;
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    return !isNaN(Number(_date));
}




/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of business days
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */ function $3d153485b108bdf5$var$differenceInBusinessDays(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    let _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    if (!(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(_dateLeft) || !(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(_dateRight)) return NaN;
    const calendarDifference = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(_dateLeft, _dateRight);
    const sign = calendarDifference < 0 ? -1 : 1;
    const weeks = Math.trunc(calendarDifference / 7);
    let result = weeks * 5;
    _dateRight = (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(_dateRight, weeks * 7);
    // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
    while(!(0, $0b5a89a8d61cafc4$export$ea39ec197993aef0)(_dateLeft, _dateRight)){
        // sign is used to account for both negative and positive differences
        result += (0, $f2cc1bbbb36bdd33$export$618d60ea299da42)(_dateRight) ? 0 : sign;
        _dateRight = (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(_dateRight, sign);
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}


Object.keys($3d153485b108bdf5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3d153485b108bdf5$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3d153485b108bdf5$exports[key];
        }
    });
});

Object.keys($f4468be34bc84842$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f4468be34bc84842$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f4468be34bc84842$exports[key];
        }
    });
});
var $a24356caf5d7c2c5$exports = {};

$parcel$export($a24356caf5d7c2c5$exports, "differenceInCalendarISOWeekYears", () => $a24356caf5d7c2c5$export$7f8a73dc2e50a070, (v) => $a24356caf5d7c2c5$export$7f8a73dc2e50a070 = v);
var $a24356caf5d7c2c5$export$7f8a73dc2e50a070;
"use strict";
$a24356caf5d7c2c5$export$7f8a73dc2e50a070 = $a24356caf5d7c2c5$var$differenceInCalendarISOWeekYears;

/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */ function $a24356caf5d7c2c5$var$differenceInCalendarISOWeekYears(dateLeft, dateRight) {
    return (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(dateLeft) - (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(dateRight);
}


Object.keys($a24356caf5d7c2c5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a24356caf5d7c2c5$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a24356caf5d7c2c5$exports[key];
        }
    });
});
var $447855ec16a3acc3$exports = {};

$parcel$export($447855ec16a3acc3$exports, "differenceInCalendarISOWeeks", () => $447855ec16a3acc3$export$28df1cb58b17e450, (v) => $447855ec16a3acc3$export$28df1cb58b17e450 = v);
var $447855ec16a3acc3$export$28df1cb58b17e450;
"use strict";
$447855ec16a3acc3$export$28df1cb58b17e450 = $447855ec16a3acc3$var$differenceInCalendarISOWeeks;



/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */ function $447855ec16a3acc3$var$differenceInCalendarISOWeeks(dateLeft, dateRight) {
    const startOfISOWeekLeft = (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(dateLeft);
    const startOfISOWeekRight = (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(dateRight);
    const timestampLeft = +startOfISOWeekLeft - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(startOfISOWeekLeft);
    const timestampRight = +startOfISOWeekRight - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(startOfISOWeekRight);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / $14ce387571ca9ade$export$4fad13613e88edc8);
}


Object.keys($447855ec16a3acc3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $447855ec16a3acc3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $447855ec16a3acc3$exports[key];
        }
    });
});
var $eef4eed79ead454e$exports = {};

$parcel$export($eef4eed79ead454e$exports, "differenceInCalendarMonths", () => $eef4eed79ead454e$export$489984ac7c996389, (v) => $eef4eed79ead454e$export$489984ac7c996389 = v);
var $eef4eed79ead454e$export$489984ac7c996389;
"use strict";
$eef4eed79ead454e$export$489984ac7c996389 = $eef4eed79ead454e$var$differenceInCalendarMonths;

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */ function $eef4eed79ead454e$var$differenceInCalendarMonths(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}


Object.keys($eef4eed79ead454e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $eef4eed79ead454e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $eef4eed79ead454e$exports[key];
        }
    });
});
var $fd4d24d79338371e$exports = {};

$parcel$export($fd4d24d79338371e$exports, "differenceInCalendarQuarters", () => $fd4d24d79338371e$export$f62ae9fb13958c7a, (v) => $fd4d24d79338371e$export$f62ae9fb13958c7a = v);
var $fd4d24d79338371e$export$f62ae9fb13958c7a;
"use strict";
$fd4d24d79338371e$export$f62ae9fb13958c7a = $fd4d24d79338371e$var$differenceInCalendarQuarters;
var $2286b42f076ade7e$exports = {};

$parcel$export($2286b42f076ade7e$exports, "getQuarter", () => $2286b42f076ade7e$export$de90a4bb31c25221, (v) => $2286b42f076ade7e$export$de90a4bb31c25221 = v);
var $2286b42f076ade7e$export$de90a4bb31c25221;
"use strict";
$2286b42f076ade7e$export$de90a4bb31c25221 = $2286b42f076ade7e$var$getQuarter;

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */ function $2286b42f076ade7e$var$getQuarter(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const quarter = Math.trunc(_date.getMonth() / 3) + 1;
    return quarter;
}



/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date

 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */ function $fd4d24d79338371e$var$differenceInCalendarQuarters(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    const quarterDiff = (0, $2286b42f076ade7e$export$de90a4bb31c25221)(_dateLeft) - (0, $2286b42f076ade7e$export$de90a4bb31c25221)(_dateRight);
    return yearDiff * 4 + quarterDiff;
}


Object.keys($fd4d24d79338371e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $fd4d24d79338371e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $fd4d24d79338371e$exports[key];
        }
    });
});
var $b920c8e3ef83c243$exports = {};

$parcel$export($b920c8e3ef83c243$exports, "differenceInCalendarWeeks", () => $b920c8e3ef83c243$export$6ed034ce62348e4, (v) => $b920c8e3ef83c243$export$6ed034ce62348e4 = v);
var $b920c8e3ef83c243$export$6ed034ce62348e4;
"use strict";
$b920c8e3ef83c243$export$6ed034ce62348e4 = $b920c8e3ef83c243$var$differenceInCalendarWeeks;



/**
 * The {@link differenceInCalendarWeeks} function options.
 */ /**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */ function $b920c8e3ef83c243$var$differenceInCalendarWeeks(dateLeft, dateRight, options) {
    const startOfWeekLeft = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(dateLeft, options);
    const startOfWeekRight = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(dateRight, options);
    const timestampLeft = +startOfWeekLeft - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(startOfWeekLeft);
    const timestampRight = +startOfWeekRight - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(startOfWeekRight);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a days is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / $14ce387571ca9ade$export$4fad13613e88edc8);
}


Object.keys($b920c8e3ef83c243$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b920c8e3ef83c243$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b920c8e3ef83c243$exports[key];
        }
    });
});
var $b7294975bac52cab$exports = {};

$parcel$export($b7294975bac52cab$exports, "differenceInCalendarYears", () => $b7294975bac52cab$export$c06dce8b38891685, (v) => $b7294975bac52cab$export$c06dce8b38891685 = v);
var $b7294975bac52cab$export$c06dce8b38891685;
"use strict";
$b7294975bac52cab$export$c06dce8b38891685 = $b7294975bac52cab$var$differenceInCalendarYears;

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */ function $b7294975bac52cab$var$differenceInCalendarYears(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    return _dateLeft.getFullYear() - _dateRight.getFullYear();
}


Object.keys($b7294975bac52cab$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b7294975bac52cab$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b7294975bac52cab$exports[key];
        }
    });
});
var $699dd14ae2bdd9c8$exports = {};

$parcel$export($699dd14ae2bdd9c8$exports, "differenceInDays", () => $699dd14ae2bdd9c8$export$86415ebf4eb36b8c, (v) => $699dd14ae2bdd9c8$export$86415ebf4eb36b8c = v);
var $699dd14ae2bdd9c8$export$86415ebf4eb36b8c;
"use strict";
$699dd14ae2bdd9c8$export$86415ebf4eb36b8c = $699dd14ae2bdd9c8$var$differenceInDays;


/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */ function $699dd14ae2bdd9c8$var$differenceInDays(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const sign = $699dd14ae2bdd9c8$var$compareLocalAsc(_dateLeft, _dateRight);
    const difference = Math.abs((0, $f4468be34bc84842$export$4a02e9c37dab4871)(_dateLeft, _dateRight));
    _dateLeft.setDate(_dateLeft.getDate() - sign * difference);
    // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastDayNotFull = Number($699dd14ae2bdd9c8$var$compareLocalAsc(_dateLeft, _dateRight) === -sign);
    const result = sign * (difference - isLastDayNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function $699dd14ae2bdd9c8$var$compareLocalAsc(dateLeft, dateRight) {
    const diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    else return diff;
}


Object.keys($699dd14ae2bdd9c8$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $699dd14ae2bdd9c8$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $699dd14ae2bdd9c8$exports[key];
        }
    });
});
var $87da13e55b9625f9$exports = {};

$parcel$export($87da13e55b9625f9$exports, "differenceInHours", () => $87da13e55b9625f9$export$5436ca250d4d6872, (v) => $87da13e55b9625f9$export$5436ca250d4d6872 = v);
var $87da13e55b9625f9$export$5436ca250d4d6872;
"use strict";
$87da13e55b9625f9$export$5436ca250d4d6872 = $87da13e55b9625f9$var$differenceInHours;
var $394bd602f4a92376$export$b6474a47258c1211;
"use strict";
$394bd602f4a92376$export$b6474a47258c1211 = $394bd602f4a92376$var$getRoundingMethod;
function $394bd602f4a92376$var$getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}



var $42fc3ee381dec4e1$exports = {};

$parcel$export($42fc3ee381dec4e1$exports, "differenceInMilliseconds", () => $42fc3ee381dec4e1$export$7be94d13716b4bf6, (v) => $42fc3ee381dec4e1$export$7be94d13716b4bf6 = v);
var $42fc3ee381dec4e1$export$7be94d13716b4bf6;
"use strict";
$42fc3ee381dec4e1$export$7be94d13716b4bf6 = $42fc3ee381dec4e1$var$differenceInMilliseconds;

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */ function $42fc3ee381dec4e1$var$differenceInMilliseconds(dateLeft, dateRight) {
    return +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft) - +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
}


/**
 * The {@link differenceInHours} function options.
 */ /**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */ function $87da13e55b9625f9$var$differenceInHours(dateLeft, dateRight, options) {
    const diff = (0, $42fc3ee381dec4e1$export$7be94d13716b4bf6)(dateLeft, dateRight) / $14ce387571ca9ade$export$7f72910d6dfd237a;
    return (0, $394bd602f4a92376$export$b6474a47258c1211)(options?.roundingMethod)(diff);
}


Object.keys($87da13e55b9625f9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $87da13e55b9625f9$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $87da13e55b9625f9$exports[key];
        }
    });
});
var $7405dc9bede25c65$exports = {};

$parcel$export($7405dc9bede25c65$exports, "differenceInISOWeekYears", () => $7405dc9bede25c65$export$bf7bde0b3bf8913a, (v) => $7405dc9bede25c65$export$bf7bde0b3bf8913a = v);
var $7405dc9bede25c65$export$bf7bde0b3bf8913a;
"use strict";
$7405dc9bede25c65$export$bf7bde0b3bf8913a = $7405dc9bede25c65$var$differenceInISOWeekYears;


var $fc7a564e8f389d76$exports = {};

$parcel$export($fc7a564e8f389d76$exports, "subISOWeekYears", () => $fc7a564e8f389d76$export$4f7d47b952f4a0aa, (v) => $fc7a564e8f389d76$export$4f7d47b952f4a0aa = v);
var $fc7a564e8f389d76$export$4f7d47b952f4a0aa;
"use strict";
$fc7a564e8f389d76$export$4f7d47b952f4a0aa = $fc7a564e8f389d76$var$subISOWeekYears;

/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of ISO week-numbering years to be subtracted.
 *
 * @returns The new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */ function $fc7a564e8f389d76$var$subISOWeekYears(date, amount) {
    return (0, $b899fb2f6f812365$export$c8240694da10d5f)(date, -amount);
}



/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */ function $7405dc9bede25c65$var$differenceInISOWeekYears(dateLeft, dateRight) {
    let _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const sign = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(_dateLeft, _dateRight);
    const difference = Math.abs((0, $a24356caf5d7c2c5$export$7f8a73dc2e50a070)(_dateLeft, _dateRight));
    _dateLeft = (0, $fc7a564e8f389d76$export$4f7d47b952f4a0aa)(_dateLeft, sign * difference);
    // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
    // if last calendar ISO year is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastISOWeekYearNotFull = Number((0, $5947c8ea77f34d17$export$fe114145ae75d197)(_dateLeft, _dateRight) === -sign);
    const result = sign * (difference - isLastISOWeekYearNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}


Object.keys($7405dc9bede25c65$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7405dc9bede25c65$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7405dc9bede25c65$exports[key];
        }
    });
});

Object.keys($42fc3ee381dec4e1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $42fc3ee381dec4e1$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $42fc3ee381dec4e1$exports[key];
        }
    });
});
var $7d44baa7fa705de3$exports = {};

$parcel$export($7d44baa7fa705de3$exports, "differenceInMinutes", () => $7d44baa7fa705de3$export$d904251335be481a, (v) => $7d44baa7fa705de3$export$d904251335be481a = v);
var $7d44baa7fa705de3$export$d904251335be481a;
"use strict";
$7d44baa7fa705de3$export$d904251335be481a = $7d44baa7fa705de3$var$differenceInMinutes;



/**
 * The {@link differenceInMinutes} function options.
 */ /**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */ function $7d44baa7fa705de3$var$differenceInMinutes(dateLeft, dateRight, options) {
    const diff = (0, $42fc3ee381dec4e1$export$7be94d13716b4bf6)(dateLeft, dateRight) / $14ce387571ca9ade$export$91246f0b9bd9beff;
    return (0, $394bd602f4a92376$export$b6474a47258c1211)(options?.roundingMethod)(diff);
}


Object.keys($7d44baa7fa705de3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7d44baa7fa705de3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7d44baa7fa705de3$exports[key];
        }
    });
});
var $9b90f60f249aa3d3$exports = {};

$parcel$export($9b90f60f249aa3d3$exports, "differenceInMonths", () => $9b90f60f249aa3d3$export$fc1ed482c2861792, (v) => $9b90f60f249aa3d3$export$fc1ed482c2861792 = v);
var $9b90f60f249aa3d3$export$fc1ed482c2861792;
"use strict";
$9b90f60f249aa3d3$export$fc1ed482c2861792 = $9b90f60f249aa3d3$var$differenceInMonths;


var $a08e51731007512d$exports = {};

$parcel$export($a08e51731007512d$exports, "isLastDayOfMonth", () => $a08e51731007512d$export$c817d0312007ea5e, (v) => $a08e51731007512d$export$c817d0312007ea5e = v);
var $a08e51731007512d$export$c817d0312007ea5e;
"use strict";
$a08e51731007512d$export$c817d0312007ea5e = $a08e51731007512d$var$isLastDayOfMonth;
var $e661b5c4d306a85b$exports = {};

$parcel$export($e661b5c4d306a85b$exports, "endOfDay", () => $e661b5c4d306a85b$export$eb9a03f0e9aa6cea, (v) => $e661b5c4d306a85b$export$eb9a03f0e9aa6cea = v);
var $e661b5c4d306a85b$export$eb9a03f0e9aa6cea;
"use strict";
$e661b5c4d306a85b$export$eb9a03f0e9aa6cea = $e661b5c4d306a85b$var$endOfDay;

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */ function $e661b5c4d306a85b$var$endOfDay(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setHours(23, 59, 59, 999);
    return _date;
}


var $378b70701f12c736$exports = {};

$parcel$export($378b70701f12c736$exports, "endOfMonth", () => $378b70701f12c736$export$a2258d9c4118825c, (v) => $378b70701f12c736$export$a2258d9c4118825c = v);
var $378b70701f12c736$export$a2258d9c4118825c;
"use strict";
$378b70701f12c736$export$a2258d9c4118825c = $378b70701f12c736$var$endOfMonth;

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ function $378b70701f12c736$var$endOfMonth(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}



/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check

 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */ function $a08e51731007512d$var$isLastDayOfMonth(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    return +(0, $e661b5c4d306a85b$export$eb9a03f0e9aa6cea)(_date) === +(0, $378b70701f12c736$export$a2258d9c4118825c)(_date);
}



/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */ function $9b90f60f249aa3d3$var$differenceInMonths(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const sign = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(_dateLeft, _dateRight);
    const difference = Math.abs((0, $eef4eed79ead454e$export$489984ac7c996389)(_dateLeft, _dateRight));
    let result;
    // Check for the difference of less than month
    if (difference < 1) result = 0;
    else {
        if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        _dateLeft.setDate(30);
        _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
        // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        let isLastMonthNotFull = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(_dateLeft, _dateRight) === -sign;
        // Check for cases of one full calendar month
        if ((0, $a08e51731007512d$export$c817d0312007ea5e)((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft)) && difference === 1 && (0, $5947c8ea77f34d17$export$fe114145ae75d197)(dateLeft, _dateRight) === 1) isLastMonthNotFull = false;
        result = sign * (difference - Number(isLastMonthNotFull));
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}


Object.keys($9b90f60f249aa3d3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9b90f60f249aa3d3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9b90f60f249aa3d3$exports[key];
        }
    });
});
var $9b88ee788b804929$exports = {};

$parcel$export($9b88ee788b804929$exports, "differenceInQuarters", () => $9b88ee788b804929$export$74b5c4055a405552, (v) => $9b88ee788b804929$export$74b5c4055a405552 = v);
var $9b88ee788b804929$export$74b5c4055a405552;
"use strict";
$9b88ee788b804929$export$74b5c4055a405552 = $9b88ee788b804929$var$differenceInQuarters;


/**
 * The {@link differenceInQuarters} function options.
 */ /**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */ function $9b88ee788b804929$var$differenceInQuarters(dateLeft, dateRight, options) {
    const diff = (0, $9b90f60f249aa3d3$export$fc1ed482c2861792)(dateLeft, dateRight) / 3;
    return (0, $394bd602f4a92376$export$b6474a47258c1211)(options?.roundingMethod)(diff);
}


Object.keys($9b88ee788b804929$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9b88ee788b804929$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9b88ee788b804929$exports[key];
        }
    });
});
var $91dc20cd92c46375$exports = {};

$parcel$export($91dc20cd92c46375$exports, "differenceInSeconds", () => $91dc20cd92c46375$export$c1889aec51783710, (v) => $91dc20cd92c46375$export$c1889aec51783710 = v);
var $91dc20cd92c46375$export$c1889aec51783710;
"use strict";
$91dc20cd92c46375$export$c1889aec51783710 = $91dc20cd92c46375$var$differenceInSeconds;


/**
 * The {@link differenceInSeconds} function options.
 */ /**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */ function $91dc20cd92c46375$var$differenceInSeconds(dateLeft, dateRight, options) {
    const diff = (0, $42fc3ee381dec4e1$export$7be94d13716b4bf6)(dateLeft, dateRight) / 1000;
    return (0, $394bd602f4a92376$export$b6474a47258c1211)(options?.roundingMethod)(diff);
}


Object.keys($91dc20cd92c46375$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $91dc20cd92c46375$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $91dc20cd92c46375$exports[key];
        }
    });
});
var $a492c43da80f2351$exports = {};

$parcel$export($a492c43da80f2351$exports, "differenceInWeeks", () => $a492c43da80f2351$export$b5147a91dc40ddb7, (v) => $a492c43da80f2351$export$b5147a91dc40ddb7 = v);
var $a492c43da80f2351$export$b5147a91dc40ddb7;
"use strict";
$a492c43da80f2351$export$b5147a91dc40ddb7 = $a492c43da80f2351$var$differenceInWeeks;


/**
 * The {@link differenceInWeeks} function options.
 */ /**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * @example
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */ function $a492c43da80f2351$var$differenceInWeeks(dateLeft, dateRight, options) {
    const diff = (0, $699dd14ae2bdd9c8$export$86415ebf4eb36b8c)(dateLeft, dateRight) / 7;
    return (0, $394bd602f4a92376$export$b6474a47258c1211)(options?.roundingMethod)(diff);
}


Object.keys($a492c43da80f2351$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a492c43da80f2351$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a492c43da80f2351$exports[key];
        }
    });
});
var $b67404e6d4dcc35a$exports = {};

$parcel$export($b67404e6d4dcc35a$exports, "differenceInYears", () => $b67404e6d4dcc35a$export$ed6bf486f68899ca, (v) => $b67404e6d4dcc35a$export$ed6bf486f68899ca = v);
var $b67404e6d4dcc35a$export$ed6bf486f68899ca;
"use strict";
$b67404e6d4dcc35a$export$ed6bf486f68899ca = $b67404e6d4dcc35a$var$differenceInYears;



/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */ function $b67404e6d4dcc35a$var$differenceInYears(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    const sign = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(_dateLeft, _dateRight);
    const difference = Math.abs((0, $b7294975bac52cab$export$c06dce8b38891685)(_dateLeft, _dateRight));
    // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days
    _dateLeft.setFullYear(1584);
    _dateRight.setFullYear(1584);
    // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastYearNotFull = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(_dateLeft, _dateRight) === -sign;
    const result = sign * (difference - +isLastYearNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}


Object.keys($b67404e6d4dcc35a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b67404e6d4dcc35a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b67404e6d4dcc35a$exports[key];
        }
    });
});
var $5bc0fc02ee474d72$exports = {};

$parcel$export($5bc0fc02ee474d72$exports, "eachDayOfInterval", () => $5bc0fc02ee474d72$export$7a337e5923c7ceb5, (v) => $5bc0fc02ee474d72$export$7a337e5923c7ceb5 = v);
var $5bc0fc02ee474d72$export$7a337e5923c7ceb5;
"use strict";
$5bc0fc02ee474d72$export$7a337e5923c7ceb5 = $5bc0fc02ee474d72$var$eachDayOfInterval;

/**
 * The {@link eachDayOfInterval} function options.
 */ /**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of days from the day of the interval start to the day of the interval end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */ function $5bc0fc02ee474d72$var$eachDayOfInterval(interval, options) {
    const startDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    const currentDate = reversed ? endDate : startDate;
    currentDate.setHours(0, 0, 0, 0);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
        currentDate.setHours(0, 0, 0, 0);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($5bc0fc02ee474d72$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $5bc0fc02ee474d72$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $5bc0fc02ee474d72$exports[key];
        }
    });
});
var $01d5916a5f925c23$exports = {};

$parcel$export($01d5916a5f925c23$exports, "eachHourOfInterval", () => $01d5916a5f925c23$export$bb4f48fee90ea86e, (v) => $01d5916a5f925c23$export$bb4f48fee90ea86e = v);
var $01d5916a5f925c23$export$bb4f48fee90ea86e;
"use strict";
$01d5916a5f925c23$export$bb4f48fee90ea86e = $01d5916a5f925c23$var$eachHourOfInterval;


/**
 * The {@link eachHourOfInterval} function options.
 */ /**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of hours from the hour of the interval start to the hour of the interval end
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */ function $01d5916a5f925c23$var$eachHourOfInterval(interval, options) {
    const startDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    let currentDate = reversed ? endDate : startDate;
    currentDate.setMinutes(0, 0, 0);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate = (0, $d144a8e63ad6ffd7$export$4a4306ad4fa0e5e6)(currentDate, step);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($01d5916a5f925c23$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $01d5916a5f925c23$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $01d5916a5f925c23$exports[key];
        }
    });
});
var $235e00b70998a219$exports = {};

$parcel$export($235e00b70998a219$exports, "eachMinuteOfInterval", () => $235e00b70998a219$export$82e17d693ce9eb6c, (v) => $235e00b70998a219$export$82e17d693ce9eb6c = v);
var $235e00b70998a219$export$82e17d693ce9eb6c;
"use strict";
$235e00b70998a219$export$82e17d693ce9eb6c = $235e00b70998a219$var$eachMinuteOfInterval;

var $51de6ba3eb1d8195$exports = {};

$parcel$export($51de6ba3eb1d8195$exports, "startOfMinute", () => $51de6ba3eb1d8195$export$c66440458c6aa793, (v) => $51de6ba3eb1d8195$export$c66440458c6aa793 = v);
var $51de6ba3eb1d8195$export$c66440458c6aa793;
"use strict";
$51de6ba3eb1d8195$export$c66440458c6aa793 = $51de6ba3eb1d8195$var$startOfMinute;

/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */ function $51de6ba3eb1d8195$var$startOfMinute(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setSeconds(0, 0);
    return _date;
}



/**
 * The {@link eachMinuteOfInterval} function options.
 */ /**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */ function $235e00b70998a219$var$eachMinuteOfInterval(interval, options) {
    const startDate = (0, $51de6ba3eb1d8195$export$c66440458c6aa793)((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start));
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    let currentDate = reversed ? endDate : startDate;
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate = (0, $79d244f57af1182c$export$2287e3d29250119e)(currentDate, step);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($235e00b70998a219$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $235e00b70998a219$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $235e00b70998a219$exports[key];
        }
    });
});
var $7232cd566362ec1a$exports = {};

$parcel$export($7232cd566362ec1a$exports, "eachMonthOfInterval", () => $7232cd566362ec1a$export$1c9322f2d2a5eed3, (v) => $7232cd566362ec1a$export$1c9322f2d2a5eed3 = v);
var $7232cd566362ec1a$export$1c9322f2d2a5eed3;
"use strict";
$7232cd566362ec1a$export$1c9322f2d2a5eed3 = $7232cd566362ec1a$var$eachMonthOfInterval;

/**
 * The {@link eachMonthOfInterval} function options.
 */ /**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */ function $7232cd566362ec1a$var$eachMonthOfInterval(interval, options) {
    const startDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    const currentDate = reversed ? endDate : startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate.setMonth(currentDate.getMonth() + step);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($7232cd566362ec1a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7232cd566362ec1a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7232cd566362ec1a$exports[key];
        }
    });
});
var $2f82704932bdecc7$exports = {};

$parcel$export($2f82704932bdecc7$exports, "eachQuarterOfInterval", () => $2f82704932bdecc7$export$96790a0abfab0078, (v) => $2f82704932bdecc7$export$96790a0abfab0078 = v);
var $2f82704932bdecc7$export$96790a0abfab0078;
"use strict";
$2f82704932bdecc7$export$96790a0abfab0078 = $2f82704932bdecc7$var$eachQuarterOfInterval;

var $8964f19f14b70eeb$exports = {};

$parcel$export($8964f19f14b70eeb$exports, "startOfQuarter", () => $8964f19f14b70eeb$export$69be7267a042ecb3, (v) => $8964f19f14b70eeb$export$69be7267a042ecb3 = v);
var $8964f19f14b70eeb$export$69be7267a042ecb3;
"use strict";
$8964f19f14b70eeb$export$69be7267a042ecb3 = $8964f19f14b70eeb$var$startOfQuarter;

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */ function $8964f19f14b70eeb$var$startOfQuarter(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const currentMonth = _date.getMonth();
    const month = currentMonth - currentMonth % 3;
    _date.setMonth(month, 1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}



/**
 * The {@link eachQuarterOfInterval} function options.
 */ /**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */ function $2f82704932bdecc7$var$eachQuarterOfInterval(interval, options) {
    const startDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +(0, $8964f19f14b70eeb$export$69be7267a042ecb3)(startDate) : +(0, $8964f19f14b70eeb$export$69be7267a042ecb3)(endDate);
    let currentDate = reversed ? (0, $8964f19f14b70eeb$export$69be7267a042ecb3)(endDate) : (0, $8964f19f14b70eeb$export$69be7267a042ecb3)(startDate);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate = (0, $6b82cd1131386c75$export$c252a41d0fbed2ce)(currentDate, step);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($2f82704932bdecc7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2f82704932bdecc7$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2f82704932bdecc7$exports[key];
        }
    });
});
var $9961c3488a939260$exports = {};

$parcel$export($9961c3488a939260$exports, "eachWeekOfInterval", () => $9961c3488a939260$export$d31a8caec75fa456, (v) => $9961c3488a939260$export$d31a8caec75fa456 = v);
var $9961c3488a939260$export$d31a8caec75fa456;
"use strict";
$9961c3488a939260$export$d31a8caec75fa456 = $9961c3488a939260$var$eachWeekOfInterval;



/**
 * The {@link eachWeekOfInterval} function options.
 */ /**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */ function $9961c3488a939260$var$eachWeekOfInterval(interval, options) {
    const startDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const startDateWeek = reversed ? (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(endDate, options) : (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(startDate, options);
    const endDateWeek = reversed ? (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(startDate, options) : (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(endDate, options);
    // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    const endTime = +endDateWeek.getTime();
    let currentDate = startDateWeek;
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        currentDate.setHours(0);
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate = (0, $24685c5ea669773d$export$ef501a2bb4f3ee6b)(currentDate, step);
        currentDate.setHours(15);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($9961c3488a939260$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9961c3488a939260$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9961c3488a939260$exports[key];
        }
    });
});
var $2d29c8e578201042$exports = {};

$parcel$export($2d29c8e578201042$exports, "eachWeekendOfInterval", () => $2d29c8e578201042$export$a2ae85dd849354a8, (v) => $2d29c8e578201042$export$a2ae85dd849354a8 = v);
var $2d29c8e578201042$export$a2ae85dd849354a8;
"use strict";
$2d29c8e578201042$export$a2ae85dd849354a8 = $2d29c8e578201042$var$eachWeekendOfInterval;


/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The given interval
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */ function $2d29c8e578201042$var$eachWeekendOfInterval(interval) {
    const dateInterval = (0, $5bc0fc02ee474d72$export$7a337e5923c7ceb5)(interval);
    const weekends = [];
    let index = 0;
    while(index < dateInterval.length){
        const date = dateInterval[index++];
        if ((0, $f2cc1bbbb36bdd33$export$618d60ea299da42)(date)) weekends.push(date);
    }
    return weekends;
}


Object.keys($2d29c8e578201042$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2d29c8e578201042$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2d29c8e578201042$exports[key];
        }
    });
});
var $f81827f1ff2aebd2$exports = {};

$parcel$export($f81827f1ff2aebd2$exports, "eachWeekendOfMonth", () => $f81827f1ff2aebd2$export$f9a185d0ad232d17, (v) => $f81827f1ff2aebd2$export$f9a185d0ad232d17 = v);
var $f81827f1ff2aebd2$export$f9a185d0ad232d17;
"use strict";
$f81827f1ff2aebd2$export$f9a185d0ad232d17 = $f81827f1ff2aebd2$var$eachWeekendOfMonth;


var $1dd0db739263b27f$exports = {};

$parcel$export($1dd0db739263b27f$exports, "startOfMonth", () => $1dd0db739263b27f$export$a5a3b454ada2268e, (v) => $1dd0db739263b27f$export$a5a3b454ada2268e = v);
var $1dd0db739263b27f$export$a5a3b454ada2268e;
"use strict";
$1dd0db739263b27f$export$a5a3b454ada2268e = $1dd0db739263b27f$var$startOfMonth;

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ function $1dd0db739263b27f$var$startOfMonth(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setDate(1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given month
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */ function $f81827f1ff2aebd2$var$eachWeekendOfMonth(date) {
    const start = (0, $1dd0db739263b27f$export$a5a3b454ada2268e)(date);
    const end = (0, $378b70701f12c736$export$a2258d9c4118825c)(date);
    return (0, $2d29c8e578201042$export$a2ae85dd849354a8)({
        start: start,
        end: end
    });
}


Object.keys($f81827f1ff2aebd2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f81827f1ff2aebd2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f81827f1ff2aebd2$exports[key];
        }
    });
});
var $c68732489450e2ee$exports = {};

$parcel$export($c68732489450e2ee$exports, "eachWeekendOfYear", () => $c68732489450e2ee$export$d4a9e5efc1ddceb9, (v) => $c68732489450e2ee$export$d4a9e5efc1ddceb9 = v);
var $c68732489450e2ee$export$d4a9e5efc1ddceb9;
"use strict";
$c68732489450e2ee$export$d4a9e5efc1ddceb9 = $c68732489450e2ee$var$eachWeekendOfYear;

var $4d670e0b4fa238d4$exports = {};

$parcel$export($4d670e0b4fa238d4$exports, "endOfYear", () => $4d670e0b4fa238d4$export$8b7aa55c66d5569e, (v) => $4d670e0b4fa238d4$export$8b7aa55c66d5569e = v);
var $4d670e0b4fa238d4$export$8b7aa55c66d5569e;
"use strict";
$4d670e0b4fa238d4$export$8b7aa55c66d5569e = $4d670e0b4fa238d4$var$endOfYear;

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */ function $4d670e0b4fa238d4$var$endOfYear(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    _date.setFullYear(year + 1, 0, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}


var $99ecdc9e93b501d0$exports = {};

$parcel$export($99ecdc9e93b501d0$exports, "startOfYear", () => $99ecdc9e93b501d0$export$f91e89d3d0406102, (v) => $99ecdc9e93b501d0$export$f91e89d3d0406102 = v);
var $99ecdc9e93b501d0$export$f91e89d3d0406102;
"use strict";
$99ecdc9e93b501d0$export$f91e89d3d0406102 = $99ecdc9e93b501d0$var$startOfYear;


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */ function $99ecdc9e93b501d0$var$startOfYear(date) {
    const cleanDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const _date = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    _date.setFullYear(cleanDate.getFullYear(), 0, 1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given year
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */ function $c68732489450e2ee$var$eachWeekendOfYear(date) {
    const start = (0, $99ecdc9e93b501d0$export$f91e89d3d0406102)(date);
    const end = (0, $4d670e0b4fa238d4$export$8b7aa55c66d5569e)(date);
    return (0, $2d29c8e578201042$export$a2ae85dd849354a8)({
        start: start,
        end: end
    });
}


Object.keys($c68732489450e2ee$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c68732489450e2ee$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c68732489450e2ee$exports[key];
        }
    });
});
var $734225aab79c6f19$exports = {};

$parcel$export($734225aab79c6f19$exports, "eachYearOfInterval", () => $734225aab79c6f19$export$9b7f165f0a71d2a5, (v) => $734225aab79c6f19$export$9b7f165f0a71d2a5 = v);
var $734225aab79c6f19$export$9b7f165f0a71d2a5;
"use strict";
$734225aab79c6f19$export$9b7f165f0a71d2a5 = $734225aab79c6f19$var$eachYearOfInterval;

/**
 * The {@link eachYearOfInterval} function options.
 */ /**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */ function $734225aab79c6f19$var$eachYearOfInterval(interval, options) {
    const startDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const endDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    const currentDate = reversed ? endDate : startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setMonth(0, 1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+currentDate <= endTime){
        dates.push((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + step);
    }
    return reversed ? dates.reverse() : dates;
}


Object.keys($734225aab79c6f19$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $734225aab79c6f19$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $734225aab79c6f19$exports[key];
        }
    });
});

Object.keys($e661b5c4d306a85b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e661b5c4d306a85b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e661b5c4d306a85b$exports[key];
        }
    });
});
var $7eb7ddd68e0ffc9b$exports = {};

$parcel$export($7eb7ddd68e0ffc9b$exports, "endOfDecade", () => $7eb7ddd68e0ffc9b$export$b922ac31d5bbe7a6, (v) => $7eb7ddd68e0ffc9b$export$b922ac31d5bbe7a6 = v);
var $7eb7ddd68e0ffc9b$export$b922ac31d5bbe7a6;
"use strict";
$7eb7ddd68e0ffc9b$export$b922ac31d5bbe7a6 = $7eb7ddd68e0ffc9b$var$endOfDecade;

/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a decade
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */ function $7eb7ddd68e0ffc9b$var$endOfDecade(date) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const decade = 9 + Math.floor(year / 10) * 10;
    _date.setFullYear(decade, 11, 31);
    _date.setHours(23, 59, 59, 999);
    return _date;
}


Object.keys($7eb7ddd68e0ffc9b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7eb7ddd68e0ffc9b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7eb7ddd68e0ffc9b$exports[key];
        }
    });
});
var $933b3f3da6e667a6$exports = {};

$parcel$export($933b3f3da6e667a6$exports, "endOfHour", () => $933b3f3da6e667a6$export$95ae95d2176c5f0, (v) => $933b3f3da6e667a6$export$95ae95d2176c5f0 = v);
var $933b3f3da6e667a6$export$95ae95d2176c5f0;
"use strict";
$933b3f3da6e667a6$export$95ae95d2176c5f0 = $933b3f3da6e667a6$var$endOfHour;

/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */ function $933b3f3da6e667a6$var$endOfHour(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMinutes(59, 59, 999);
    return _date;
}


Object.keys($933b3f3da6e667a6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $933b3f3da6e667a6$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $933b3f3da6e667a6$exports[key];
        }
    });
});
var $fa19a796f9c8f101$exports = {};

$parcel$export($fa19a796f9c8f101$exports, "endOfISOWeek", () => $fa19a796f9c8f101$export$186cd934f32084be, (v) => $fa19a796f9c8f101$export$186cd934f32084be = v);
var $fa19a796f9c8f101$export$186cd934f32084be;
"use strict";
$fa19a796f9c8f101$export$186cd934f32084be = $fa19a796f9c8f101$var$endOfISOWeek;
var $aaf0f76b02447a7c$exports = {};

$parcel$export($aaf0f76b02447a7c$exports, "endOfWeek", () => $aaf0f76b02447a7c$export$ef8b6d9133084f4e, (v) => $aaf0f76b02447a7c$export$ef8b6d9133084f4e = v);
var $aaf0f76b02447a7c$export$ef8b6d9133084f4e;
"use strict";
$aaf0f76b02447a7c$export$ef8b6d9133084f4e = $aaf0f76b02447a7c$var$endOfWeek;


/**
 * The {@link endOfWeek} function options.
 */ /**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */ function $aaf0f76b02447a7c$var$endOfWeek(date, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setDate(_date.getDate() + diff);
    _date.setHours(23, 59, 59, 999);
    return _date;
}


/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */ function $fa19a796f9c8f101$var$endOfISOWeek(date) {
    return (0, $aaf0f76b02447a7c$export$ef8b6d9133084f4e)(date, {
        weekStartsOn: 1
    });
}


Object.keys($fa19a796f9c8f101$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $fa19a796f9c8f101$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $fa19a796f9c8f101$exports[key];
        }
    });
});
var $9065a2903332a0e1$exports = {};

$parcel$export($9065a2903332a0e1$exports, "endOfISOWeekYear", () => $9065a2903332a0e1$export$73068f3824c9c1d, (v) => $9065a2903332a0e1$export$73068f3824c9c1d = v);
var $9065a2903332a0e1$export$73068f3824c9c1d;
"use strict";
$9065a2903332a0e1$export$73068f3824c9c1d = $9065a2903332a0e1$var$endOfISOWeekYear;



/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */ function $9065a2903332a0e1$var$endOfISOWeekYear(date) {
    const year = (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(date);
    const fourthOfJanuaryOfNextYear = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const _date = (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(fourthOfJanuaryOfNextYear);
    _date.setMilliseconds(_date.getMilliseconds() - 1);
    return _date;
}


Object.keys($9065a2903332a0e1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9065a2903332a0e1$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9065a2903332a0e1$exports[key];
        }
    });
});
var $2c03fd8f1bcc8ea2$exports = {};

$parcel$export($2c03fd8f1bcc8ea2$exports, "endOfMinute", () => $2c03fd8f1bcc8ea2$export$a06a772fc63bff07, (v) => $2c03fd8f1bcc8ea2$export$a06a772fc63bff07 = v);
var $2c03fd8f1bcc8ea2$export$a06a772fc63bff07;
"use strict";
$2c03fd8f1bcc8ea2$export$a06a772fc63bff07 = $2c03fd8f1bcc8ea2$var$endOfMinute;

/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */ function $2c03fd8f1bcc8ea2$var$endOfMinute(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setSeconds(59, 999);
    return _date;
}


Object.keys($2c03fd8f1bcc8ea2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2c03fd8f1bcc8ea2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2c03fd8f1bcc8ea2$exports[key];
        }
    });
});

Object.keys($378b70701f12c736$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $378b70701f12c736$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $378b70701f12c736$exports[key];
        }
    });
});
var $a6ab2481bdeec894$exports = {};

$parcel$export($a6ab2481bdeec894$exports, "endOfQuarter", () => $a6ab2481bdeec894$export$5f53493861eef879, (v) => $a6ab2481bdeec894$export$5f53493861eef879 = v);
var $a6ab2481bdeec894$export$5f53493861eef879;
"use strict";
$a6ab2481bdeec894$export$5f53493861eef879 = $a6ab2481bdeec894$var$endOfQuarter;

/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ function $a6ab2481bdeec894$var$endOfQuarter(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const currentMonth = _date.getMonth();
    const month = currentMonth - currentMonth % 3 + 3;
    _date.setMonth(month, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}


Object.keys($a6ab2481bdeec894$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a6ab2481bdeec894$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a6ab2481bdeec894$exports[key];
        }
    });
});
var $8b740a89e223fa0f$exports = {};

$parcel$export($8b740a89e223fa0f$exports, "endOfSecond", () => $8b740a89e223fa0f$export$ef560ab2fa7b52a2, (v) => $8b740a89e223fa0f$export$ef560ab2fa7b52a2 = v);
var $8b740a89e223fa0f$export$ef560ab2fa7b52a2;
"use strict";
$8b740a89e223fa0f$export$ef560ab2fa7b52a2 = $8b740a89e223fa0f$var$endOfSecond;

/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */ function $8b740a89e223fa0f$var$endOfSecond(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMilliseconds(999);
    return _date;
}


Object.keys($8b740a89e223fa0f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8b740a89e223fa0f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8b740a89e223fa0f$exports[key];
        }
    });
});
var $1f32452191506999$exports = {};

$parcel$export($1f32452191506999$exports, "endOfToday", () => $1f32452191506999$export$1b7031a80bd92a6e, (v) => $1f32452191506999$export$1b7031a80bd92a6e = v);
var $1f32452191506999$export$1b7031a80bd92a6e;
"use strict";
$1f32452191506999$export$1b7031a80bd92a6e = $1f32452191506999$var$endOfToday;

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */ function $1f32452191506999$var$endOfToday() {
    return (0, $e661b5c4d306a85b$export$eb9a03f0e9aa6cea)(Date.now());
}


Object.keys($1f32452191506999$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1f32452191506999$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1f32452191506999$exports[key];
        }
    });
});
var $f047e7a60b114a73$exports = {};

$parcel$export($f047e7a60b114a73$exports, "endOfTomorrow", () => $f047e7a60b114a73$export$d788ac27ae2a54ea, (v) => $f047e7a60b114a73$export$d788ac27ae2a54ea = v);
var $f047e7a60b114a73$export$d788ac27ae2a54ea;
"use strict";
$f047e7a60b114a73$export$d788ac27ae2a54ea = $f047e7a60b114a73$var$endOfTomorrow; /**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */ 
function $f047e7a60b114a73$var$endOfTomorrow() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = new Date(0);
    date.setFullYear(year, month, day + 1);
    date.setHours(23, 59, 59, 999);
    return date;
}


Object.keys($f047e7a60b114a73$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f047e7a60b114a73$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f047e7a60b114a73$exports[key];
        }
    });
});

Object.keys($aaf0f76b02447a7c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $aaf0f76b02447a7c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $aaf0f76b02447a7c$exports[key];
        }
    });
});

Object.keys($4d670e0b4fa238d4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4d670e0b4fa238d4$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4d670e0b4fa238d4$exports[key];
        }
    });
});
var $3dd59a01ef60a477$exports = {};

$parcel$export($3dd59a01ef60a477$exports, "endOfYesterday", () => $3dd59a01ef60a477$export$45190faf1024f97a, (v) => $3dd59a01ef60a477$export$45190faf1024f97a = v);
var $3dd59a01ef60a477$export$45190faf1024f97a;
"use strict";
$3dd59a01ef60a477$export$45190faf1024f97a = $3dd59a01ef60a477$var$endOfYesterday; /**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */ 
function $3dd59a01ef60a477$var$endOfYesterday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(23, 59, 59, 999);
    return date;
}


Object.keys($3dd59a01ef60a477$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3dd59a01ef60a477$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3dd59a01ef60a477$exports[key];
        }
    });
});
var $d8509d24c4e1372f$exports = {};
"use strict";
$d8509d24c4e1372f$exports.format = $d8509d24c4e1372f$exports.formatDate = $d8509d24c4e1372f$var$format;
Object.defineProperty($d8509d24c4e1372f$exports, "formatters", {
    enumerable: true,
    get: function() {
        return $c7697d1e3796e839$export$fe98a034cfb96d55;
    }
});
Object.defineProperty($d8509d24c4e1372f$exports, "longFormatters", {
    enumerable: true,
    get: function() {
        return $db44f4637d14c69e$export$70cc8fd02856fd58;
    }
});
var $0bf869c88d95e2b3$exports = {};
"use strict";
Object.defineProperty($0bf869c88d95e2b3$exports, "defaultLocale", {
    enumerable: true,
    get: function() {
        return $c5cb53483bd4abca$export$137380d9ce54f7f;
    }
});
var $c5cb53483bd4abca$export$137380d9ce54f7f;
"use strict";
$c5cb53483bd4abca$export$137380d9ce54f7f = void 0;
var $1c20aaa9db4422ff$export$2c14ff85d6318973;
"use strict";
$1c20aaa9db4422ff$export$2c14ff85d6318973 = void 0;
const $1c20aaa9db4422ff$var$formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const $1c20aaa9db4422ff$var$formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = $1c20aaa9db4422ff$var$formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};
$1c20aaa9db4422ff$export$2c14ff85d6318973 = $1c20aaa9db4422ff$var$formatDistance;


var $a6ec42055c24f02d$export$cbf60ecb96cbb82f;
"use strict";
$a6ec42055c24f02d$export$cbf60ecb96cbb82f = void 0;
var $2e9566e8bfe03d3c$export$38e44e97ce4dbb7d;
"use strict";
$2e9566e8bfe03d3c$export$38e44e97ce4dbb7d = $2e9566e8bfe03d3c$var$buildFormatLongFn;
function $2e9566e8bfe03d3c$var$buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}


const $a6ec42055c24f02d$var$dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const $a6ec42055c24f02d$var$timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const $a6ec42055c24f02d$var$dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const $a6ec42055c24f02d$var$formatLong = $a6ec42055c24f02d$export$cbf60ecb96cbb82f = {
    date: (0, $2e9566e8bfe03d3c$export$38e44e97ce4dbb7d)({
        formats: $a6ec42055c24f02d$var$dateFormats,
        defaultWidth: "full"
    }),
    time: (0, $2e9566e8bfe03d3c$export$38e44e97ce4dbb7d)({
        formats: $a6ec42055c24f02d$var$timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, $2e9566e8bfe03d3c$export$38e44e97ce4dbb7d)({
        formats: $a6ec42055c24f02d$var$dateTimeFormats,
        defaultWidth: "full"
    })
};


var $8458df8605380386$export$8fbbfd65594f46a0;
"use strict";
$8458df8605380386$export$8fbbfd65594f46a0 = void 0;
const $8458df8605380386$var$formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const $8458df8605380386$var$formatRelative = (token, _date, _baseDate, _options)=>$8458df8605380386$var$formatRelativeLocale[token];
$8458df8605380386$export$8fbbfd65594f46a0 = $8458df8605380386$var$formatRelative;


var $ee96fe2a41088743$export$b3bd0bc58e36cd63;
"use strict";
$ee96fe2a41088743$export$b3bd0bc58e36cd63 = void 0;
var $b0f831ca77312485$export$63596d6ee8878b25;
"use strict";
$b0f831ca77312485$export$63596d6ee8878b25 = $b0f831ca77312485$var$buildLocalizeFn; /* eslint-disable no-unused-vars */ 
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ function $b0f831ca77312485$var$buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}


const $ee96fe2a41088743$var$eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const $ee96fe2a41088743$var$quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const $ee96fe2a41088743$var$monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const $ee96fe2a41088743$var$dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const $ee96fe2a41088743$var$dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const $ee96fe2a41088743$var$formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const $ee96fe2a41088743$var$ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
const $ee96fe2a41088743$var$localize = $ee96fe2a41088743$export$b3bd0bc58e36cd63 = {
    ordinalNumber: $ee96fe2a41088743$var$ordinalNumber,
    era: (0, $b0f831ca77312485$export$63596d6ee8878b25)({
        values: $ee96fe2a41088743$var$eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, $b0f831ca77312485$export$63596d6ee8878b25)({
        values: $ee96fe2a41088743$var$quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, $b0f831ca77312485$export$63596d6ee8878b25)({
        values: $ee96fe2a41088743$var$monthValues,
        defaultWidth: "wide"
    }),
    day: (0, $b0f831ca77312485$export$63596d6ee8878b25)({
        values: $ee96fe2a41088743$var$dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, $b0f831ca77312485$export$63596d6ee8878b25)({
        values: $ee96fe2a41088743$var$dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: $ee96fe2a41088743$var$formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};


var $49880ea99a9b93b6$export$4659b591c19bdf3d;
"use strict";
$49880ea99a9b93b6$export$4659b591c19bdf3d = void 0;
var $f5712707301b47e7$export$1430a0f35710914d;
"use strict";
$f5712707301b47e7$export$1430a0f35710914d = $f5712707301b47e7$var$buildMatchFn;
function $f5712707301b47e7$var$buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? $f5712707301b47e7$var$findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : $f5712707301b47e7$var$findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
function $f5712707301b47e7$var$findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
    }
    return undefined;
}
function $f5712707301b47e7$var$findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}


var $7abdd313e9e21dd1$export$fdaf2fd6d7edde95;
"use strict";
$7abdd313e9e21dd1$export$fdaf2fd6d7edde95 = $7abdd313e9e21dd1$var$buildMatchPatternFn;
function $7abdd313e9e21dd1$var$buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}


const $49880ea99a9b93b6$var$matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const $49880ea99a9b93b6$var$parseOrdinalNumberPattern = /\d+/i;
const $49880ea99a9b93b6$var$matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const $49880ea99a9b93b6$var$parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const $49880ea99a9b93b6$var$matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const $49880ea99a9b93b6$var$parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const $49880ea99a9b93b6$var$matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const $49880ea99a9b93b6$var$parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const $49880ea99a9b93b6$var$matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const $49880ea99a9b93b6$var$parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const $49880ea99a9b93b6$var$matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const $49880ea99a9b93b6$var$parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const $49880ea99a9b93b6$var$match = $49880ea99a9b93b6$export$4659b591c19bdf3d = {
    ordinalNumber: (0, $7abdd313e9e21dd1$export$fdaf2fd6d7edde95)({
        matchPattern: $49880ea99a9b93b6$var$matchOrdinalNumberPattern,
        parsePattern: $49880ea99a9b93b6$var$parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, $f5712707301b47e7$export$1430a0f35710914d)({
        matchPatterns: $49880ea99a9b93b6$var$matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: $49880ea99a9b93b6$var$parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, $f5712707301b47e7$export$1430a0f35710914d)({
        matchPatterns: $49880ea99a9b93b6$var$matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: $49880ea99a9b93b6$var$parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, $f5712707301b47e7$export$1430a0f35710914d)({
        matchPatterns: $49880ea99a9b93b6$var$matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: $49880ea99a9b93b6$var$parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, $f5712707301b47e7$export$1430a0f35710914d)({
        matchPatterns: $49880ea99a9b93b6$var$matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: $49880ea99a9b93b6$var$parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, $f5712707301b47e7$export$1430a0f35710914d)({
        matchPatterns: $49880ea99a9b93b6$var$matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: $49880ea99a9b93b6$var$parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};


/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */ const $c5cb53483bd4abca$var$enUS = $c5cb53483bd4abca$export$137380d9ce54f7f = {
    code: "en-US",
    formatDistance: $1c20aaa9db4422ff$export$2c14ff85d6318973,
    formatLong: $a6ec42055c24f02d$export$cbf60ecb96cbb82f,
    formatRelative: $8458df8605380386$export$8fbbfd65594f46a0,
    localize: $ee96fe2a41088743$export$b3bd0bc58e36cd63,
    match: $49880ea99a9b93b6$export$4659b591c19bdf3d,
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};





var $c7697d1e3796e839$export$fe98a034cfb96d55;
"use strict";
$c7697d1e3796e839$export$fe98a034cfb96d55 = void 0;
var $e6bce2123ee27fd3$exports = {};

$parcel$export($e6bce2123ee27fd3$exports, "getDayOfYear", () => $e6bce2123ee27fd3$export$d3b42cd8452deec, (v) => $e6bce2123ee27fd3$export$d3b42cd8452deec = v);
var $e6bce2123ee27fd3$export$d3b42cd8452deec;
"use strict";
$e6bce2123ee27fd3$export$d3b42cd8452deec = $e6bce2123ee27fd3$var$getDayOfYear;



/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */ function $e6bce2123ee27fd3$var$getDayOfYear(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(_date, (0, $99ecdc9e93b501d0$export$f91e89d3d0406102)(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}


var $318ab28058dd7297$exports = {};

$parcel$export($318ab28058dd7297$exports, "getISOWeek", () => $318ab28058dd7297$export$7cabdc5698b63e2f, (v) => $318ab28058dd7297$export$7cabdc5698b63e2f = v);
var $318ab28058dd7297$export$7cabdc5698b63e2f;
"use strict";
$318ab28058dd7297$export$7cabdc5698b63e2f = $318ab28058dd7297$var$getISOWeek;




/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */ function $318ab28058dd7297$var$getISOWeek(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = +(0, $a0788919f0f9c7eb$export$6173213f95a4431e)(_date) - +(0, $18db251bc9893458$export$236bdfa374eb69a9)(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / $14ce387571ca9ade$export$4fad13613e88edc8) + 1;
}



var $518ac188edcd4918$exports = {};

$parcel$export($518ac188edcd4918$exports, "getWeek", () => $518ac188edcd4918$export$efe19b760242b2fc, (v) => $518ac188edcd4918$export$efe19b760242b2fc = v);
var $518ac188edcd4918$export$efe19b760242b2fc;
"use strict";
$518ac188edcd4918$export$efe19b760242b2fc = $518ac188edcd4918$var$getWeek;


var $f7ace184d5d2a175$exports = {};

$parcel$export($f7ace184d5d2a175$exports, "startOfWeekYear", () => $f7ace184d5d2a175$export$bb7b45bb8e74da0f, (v) => $f7ace184d5d2a175$export$bb7b45bb8e74da0f = v);
var $f7ace184d5d2a175$export$bb7b45bb8e74da0f;
"use strict";
$f7ace184d5d2a175$export$bb7b45bb8e74da0f = $f7ace184d5d2a175$var$startOfWeekYear;

var $775230ee08a3e430$exports = {};

$parcel$export($775230ee08a3e430$exports, "getWeekYear", () => $775230ee08a3e430$export$12d572480ceb6e58, (v) => $775230ee08a3e430$export$12d572480ceb6e58 = v);
var $775230ee08a3e430$export$12d572480ceb6e58;
"use strict";
$775230ee08a3e430$export$12d572480ceb6e58 = $775230ee08a3e430$var$getWeekYear;




/**
 * The {@link getWeekYear} function options.
 */ /**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */ function $775230ee08a3e430$var$getWeekYear(date, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(firstWeekOfThisYear, options);
    if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (_date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}




/**
 * The {@link startOfWeekYear} function options.
 */ /**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */ function $f7ace184d5d2a175$var$startOfWeekYear(date, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, $775230ee08a3e430$export$12d572480ceb6e58)(date, options);
    const firstWeek = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(firstWeek, options);
    return _date;
}



/**
 * The {@link getWeek} function options.
 */ /**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */ function $518ac188edcd4918$var$getWeek(date, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = +(0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(_date, options) - +(0, $f7ace184d5d2a175$export$bb7b45bb8e74da0f)(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / $14ce387571ca9ade$export$4fad13613e88edc8) + 1;
}



var $bcd12fce1c0a1b4e$export$c8306e720e213c0f;
"use strict";
$bcd12fce1c0a1b4e$export$c8306e720e213c0f = $bcd12fce1c0a1b4e$var$addLeadingZeros;
function $bcd12fce1c0a1b4e$var$addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}


var $e2a9cf0830422dc2$export$b0d4b338e1516f13;
"use strict";
$e2a9cf0830422dc2$export$b0d4b338e1516f13 = void 0;

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ const $e2a9cf0830422dc2$var$lightFormatters = $e2a9cf0830422dc2$export$b0d4b338e1516f13 = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(fractionalSeconds, token.length);
    }
};


const $c7697d1e3796e839$var$dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ const $c7697d1e3796e839$var$formatters = $c7697d1e3796e839$export$fe98a034cfb96d55 = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, $775230ee08a3e430$export$12d572480ceb6e58)(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
        // Padding
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(date);
        // Padding
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return $e2a9cf0830422dc2$export$b0d4b338e1516f13.M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, $518ac188edcd4918$export$efe19b760242b2fc)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, $318ab28058dd7297$export$7cabdc5698b63e2f)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getDate(), {
            unit: "date"
        });
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, $e6bce2123ee27fd3$export$d3b42cd8452deec)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = $c7697d1e3796e839$var$dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = $c7697d1e3796e839$var$dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = $c7697d1e3796e839$var$dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = $c7697d1e3796e839$var$dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = $c7697d1e3796e839$var$dayPeriodEnum.morning;
        else dayPeriodEnumValue = $c7697d1e3796e839$var$dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getHours(), {
            unit: "hour"
        });
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getMinutes(), {
            unit: "minute"
        });
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getSeconds(), {
            unit: "second"
        });
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return $c7697d1e3796e839$var$formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return $c7697d1e3796e839$var$formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return $c7697d1e3796e839$var$formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return $c7697d1e3796e839$var$formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return $c7697d1e3796e839$var$formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return $c7697d1e3796e839$var$formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + $c7697d1e3796e839$var$formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + $c7697d1e3796e839$var$formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + $c7697d1e3796e839$var$formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + $c7697d1e3796e839$var$formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(date.getTime() / 1000);
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        const timestamp = date.getTime();
        return (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(timestamp, token.length);
    }
};
function $c7697d1e3796e839$var$formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    return sign + String(hours) + delimiter + (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(minutes, 2);
}
function $c7697d1e3796e839$var$formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(Math.abs(offset) / 60, 2);
    }
    return $c7697d1e3796e839$var$formatTimezone(offset, delimiter);
}
function $c7697d1e3796e839$var$formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(Math.trunc(absOffset / 60), 2);
    const minutes = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}


var $db44f4637d14c69e$export$70cc8fd02856fd58;
"use strict";
$db44f4637d14c69e$export$70cc8fd02856fd58 = void 0;
const $db44f4637d14c69e$var$dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const $db44f4637d14c69e$var$timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const $db44f4637d14c69e$var$dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) return $db44f4637d14c69e$var$dateLongFormatter(pattern, formatLong);
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", $db44f4637d14c69e$var$dateLongFormatter(datePattern, formatLong)).replace("{{time}}", $db44f4637d14c69e$var$timeLongFormatter(timePattern, formatLong));
};
const $db44f4637d14c69e$var$longFormatters = $db44f4637d14c69e$export$70cc8fd02856fd58 = {
    p: $db44f4637d14c69e$var$timeLongFormatter,
    P: $db44f4637d14c69e$var$dateTimeLongFormatter
};


var $cb29d1fc2049db35$export$c6cc36aa33304772;
var $cb29d1fc2049db35$export$c6b49d6dceb604a1;
var $cb29d1fc2049db35$export$f5f38f90ecaaf879;
"use strict";
$cb29d1fc2049db35$export$c6cc36aa33304772 = $cb29d1fc2049db35$var$isProtectedDayOfYearToken;
$cb29d1fc2049db35$export$c6b49d6dceb604a1 = $cb29d1fc2049db35$var$isProtectedWeekYearToken;
$cb29d1fc2049db35$export$f5f38f90ecaaf879 = $cb29d1fc2049db35$var$warnOrThrowProtectedError;
const $cb29d1fc2049db35$var$dayOfYearTokenRE = /^D+$/;
const $cb29d1fc2049db35$var$weekYearTokenRE = /^Y+$/;
const $cb29d1fc2049db35$var$throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function $cb29d1fc2049db35$var$isProtectedDayOfYearToken(token) {
    return $cb29d1fc2049db35$var$dayOfYearTokenRE.test(token);
}
function $cb29d1fc2049db35$var$isProtectedWeekYearToken(token) {
    return $cb29d1fc2049db35$var$weekYearTokenRE.test(token);
}
function $cb29d1fc2049db35$var$warnOrThrowProtectedError(token, format, input) {
    const _message = $cb29d1fc2049db35$var$message(token, format, input);
    console.warn(_message);
    if ($cb29d1fc2049db35$var$throwTokens.includes(token)) throw new RangeError(_message);
}
function $cb29d1fc2049db35$var$message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}




// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const $d8509d24c4e1372f$var$formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const $d8509d24c4e1372f$var$longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const $d8509d24c4e1372f$var$escapedStringRegExp = /^'([^]*?)'?$/;
const $d8509d24c4e1372f$var$doubleQuoteRegExp = /''/g;
const $d8509d24c4e1372f$var$unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * The {@link format} function options.
 */ /**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ function $d8509d24c4e1372f$var$format(date, formatStr, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const locale = options?.locale ?? defaultOptions.locale ?? $0bf869c88d95e2b3$exports.defaultLocale;
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (!(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(originalDate)) throw new RangeError("Invalid time value");
    let parts = formatStr.match($d8509d24c4e1372f$var$longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = $db44f4637d14c69e$export$70cc8fd02856fd58[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match($d8509d24c4e1372f$var$formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") return {
            isToken: false,
            value: "'"
        };
        const firstCharacter = substring[0];
        if (firstCharacter === "'") return {
            isToken: false,
            value: $d8509d24c4e1372f$var$cleanEscapedString(substring)
        };
        if ($c7697d1e3796e839$export$fe98a034cfb96d55[firstCharacter]) return {
            isToken: true,
            value: substring
        };
        if (firstCharacter.match($d8509d24c4e1372f$var$unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
    const formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, $cb29d1fc2049db35$export$c6b49d6dceb604a1)(token) || !options?.useAdditionalDayOfYearTokens && (0, $cb29d1fc2049db35$export$c6cc36aa33304772)(token)) (0, $cb29d1fc2049db35$export$f5f38f90ecaaf879)(token, formatStr, String(date));
        const formatter = $c7697d1e3796e839$export$fe98a034cfb96d55[token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function $d8509d24c4e1372f$var$cleanEscapedString(input) {
    const matched = input.match($d8509d24c4e1372f$var$escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace($d8509d24c4e1372f$var$doubleQuoteRegExp, "'");
}


Object.keys($d8509d24c4e1372f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d8509d24c4e1372f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d8509d24c4e1372f$exports[key];
        }
    });
});
var $0eee91b02968ce48$exports = {};

$parcel$export($0eee91b02968ce48$exports, "formatDistance", () => $0eee91b02968ce48$export$2c14ff85d6318973, (v) => $0eee91b02968ce48$export$2c14ff85d6318973 = v);
var $0eee91b02968ce48$export$2c14ff85d6318973;
"use strict";
$0eee91b02968ce48$export$2c14ff85d6318973 = $0eee91b02968ce48$var$formatDistance;








/**
 * The {@link formatDistance} function options.
 */ /**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */ function $0eee91b02968ce48$var$formatDistance(date, baseDate, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const locale = options?.locale ?? defaultOptions.locale ?? $0bf869c88d95e2b3$exports.defaultLocale;
    const minutesInAlmostTwoDays = 2520;
    const comparison = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(date, baseDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    let dateLeft;
    let dateRight;
    if (comparison > 0) {
        dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(baseDate);
        dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    } else {
        dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
        dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(baseDate);
    }
    const seconds = (0, $91dc20cd92c46375$export$c1889aec51783710)(dateRight, dateLeft);
    const offsetInSeconds = ((0, $30ec17c6531dc4b7$export$113002b5eff6e430)(dateRight) - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(dateLeft)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
            else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", 1, localizeOptions);
        } else {
            if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
    } else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
    else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
    else if (minutes < $14ce387571ca9ade$export$2423174df8cd3cd2) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
    else if (minutes < $14ce387571ca9ade$export$ab7da2ccd1075c38) {
        const days = Math.round(minutes / $14ce387571ca9ade$export$2423174df8cd3cd2);
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < $14ce387571ca9ade$export$ab7da2ccd1075c38 * 2) {
        months = Math.round(minutes / $14ce387571ca9ade$export$ab7da2ccd1075c38);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, $9b90f60f249aa3d3$export$fc1ed482c2861792)(dateRight, dateLeft);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / $14ce387571ca9ade$export$ab7da2ccd1075c38);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
        else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
        else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
}


Object.keys($0eee91b02968ce48$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0eee91b02968ce48$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0eee91b02968ce48$exports[key];
        }
    });
});
var $8f28618a3fb9fa78$exports = {};

$parcel$export($8f28618a3fb9fa78$exports, "formatDistanceStrict", () => $8f28618a3fb9fa78$export$e4be225b8ee0a759, (v) => $8f28618a3fb9fa78$export$e4be225b8ee0a759 = v);
var $8f28618a3fb9fa78$export$e4be225b8ee0a759;
"use strict";
$8f28618a3fb9fa78$export$e4be225b8ee0a759 = $8f28618a3fb9fa78$var$formatDistanceStrict;







/**
 * The {@link formatDistanceStrict} function options.
 */ /**
 * The unit used to format the distance in {@link formatDistanceStrict}.
 */ /**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */ function $8f28618a3fb9fa78$var$formatDistanceStrict(date, baseDate, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const locale = options?.locale ?? defaultOptions.locale ?? $0bf869c88d95e2b3$exports.defaultLocale;
    const comparison = (0, $5947c8ea77f34d17$export$fe114145ae75d197)(date, baseDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    let dateLeft;
    let dateRight;
    if (comparison > 0) {
        dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(baseDate);
        dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    } else {
        dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
        dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(baseDate);
    }
    const roundingMethod = (0, $394bd602f4a92376$export$b6474a47258c1211)(options?.roundingMethod ?? "round");
    const milliseconds = dateRight.getTime() - dateLeft.getTime();
    const minutes = milliseconds / $14ce387571ca9ade$export$91246f0b9bd9beff;
    const timezoneOffset = (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(dateRight) - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(dateLeft);
    // Use DST-normalized difference in minutes for years, months and days;
    // use regular difference in minutes for hours, minutes and seconds.
    const dstNormalizedMinutes = (milliseconds - timezoneOffset) / $14ce387571ca9ade$export$91246f0b9bd9beff;
    const defaultUnit = options?.unit;
    let unit;
    if (!defaultUnit) {
        if (minutes < 1) unit = "second";
        else if (minutes < 60) unit = "minute";
        else if (minutes < $14ce387571ca9ade$export$2423174df8cd3cd2) unit = "hour";
        else if (dstNormalizedMinutes < $14ce387571ca9ade$export$ab7da2ccd1075c38) unit = "day";
        else if (dstNormalizedMinutes < $14ce387571ca9ade$export$3633035e63cee86a) unit = "month";
        else unit = "year";
    } else unit = defaultUnit;
    // 0 up to 60 seconds
    if (unit === "second") {
        const seconds = roundingMethod(milliseconds / 1000);
        return locale.formatDistance("xSeconds", seconds, localizeOptions);
    // 1 up to 60 mins
    } else if (unit === "minute") {
        const roundedMinutes = roundingMethod(minutes);
        return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
    // 1 up to 24 hours
    } else if (unit === "hour") {
        const hours = roundingMethod(minutes / 60);
        return locale.formatDistance("xHours", hours, localizeOptions);
    // 1 up to 30 days
    } else if (unit === "day") {
        const days = roundingMethod(dstNormalizedMinutes / $14ce387571ca9ade$export$2423174df8cd3cd2);
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 up to 12 months
    } else if (unit === "month") {
        const months = roundingMethod(dstNormalizedMinutes / $14ce387571ca9ade$export$ab7da2ccd1075c38);
        return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
    // 1 year up to max Date
    } else {
        const years = roundingMethod(dstNormalizedMinutes / $14ce387571ca9ade$export$3633035e63cee86a);
        return locale.formatDistance("xYears", years, localizeOptions);
    }
}


Object.keys($8f28618a3fb9fa78$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8f28618a3fb9fa78$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8f28618a3fb9fa78$exports[key];
        }
    });
});
var $2b0c2d7064a5291d$exports = {};

$parcel$export($2b0c2d7064a5291d$exports, "formatDistanceToNow", () => $2b0c2d7064a5291d$export$d130c20a256f8817, (v) => $2b0c2d7064a5291d$export$d130c20a256f8817 = v);
var $2b0c2d7064a5291d$export$d130c20a256f8817;
"use strict";
$2b0c2d7064a5291d$export$d130c20a256f8817 = $2b0c2d7064a5291d$var$formatDistanceToNow;


/**
 * The {@link formatDistanceToNow} function options.
 */ /**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - The object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */ function $2b0c2d7064a5291d$var$formatDistanceToNow(date, options) {
    return (0, $0eee91b02968ce48$export$2c14ff85d6318973)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date), options);
}


Object.keys($2b0c2d7064a5291d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2b0c2d7064a5291d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2b0c2d7064a5291d$exports[key];
        }
    });
});
var $6edc3df3b9bd3928$exports = {};

$parcel$export($6edc3df3b9bd3928$exports, "formatDistanceToNowStrict", () => $6edc3df3b9bd3928$export$d0e02d4eb1ad1e32, (v) => $6edc3df3b9bd3928$export$d0e02d4eb1ad1e32 = v);
var $6edc3df3b9bd3928$export$d0e02d4eb1ad1e32;
"use strict";
$6edc3df3b9bd3928$export$d0e02d4eb1ad1e32 = $6edc3df3b9bd3928$var$formatDistanceToNowStrict;


/**
 * The {@link formatDistanceToNowStrict} function options.
 */ /**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */ function $6edc3df3b9bd3928$var$formatDistanceToNowStrict(date, options) {
    return (0, $8f28618a3fb9fa78$export$e4be225b8ee0a759)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date), options);
}


Object.keys($6edc3df3b9bd3928$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $6edc3df3b9bd3928$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $6edc3df3b9bd3928$exports[key];
        }
    });
});
var $13ce8c4006281841$exports = {};

$parcel$export($13ce8c4006281841$exports, "formatDuration", () => $13ce8c4006281841$export$bc733b0c5cbb3e8a, (v) => $13ce8c4006281841$export$bc733b0c5cbb3e8a = v);
var $13ce8c4006281841$export$bc733b0c5cbb3e8a;
"use strict";
$13ce8c4006281841$export$bc733b0c5cbb3e8a = $13ce8c4006281841$var$formatDuration;


/**
 * The {@link formatDuration} function options.
 */ const $13ce8c4006281841$var$defaultFormat = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds"
];
/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param duration - The duration to format
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */ function $13ce8c4006281841$var$formatDuration(duration, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const locale = options?.locale ?? defaultOptions.locale ?? $0bf869c88d95e2b3$exports.defaultLocale;
    const format = options?.format ?? $13ce8c4006281841$var$defaultFormat;
    const zero = options?.zero ?? false;
    const delimiter = options?.delimiter ?? " ";
    if (!locale.formatDistance) return "";
    const result = format.reduce((acc, unit)=>{
        const token = `x${unit.replace(/(^.)/, (m)=>m.toUpperCase())}`;
        const value = duration[unit];
        if (value !== undefined && (zero || duration[unit])) return acc.concat(locale.formatDistance(token, value));
        return acc;
    }, []).join(delimiter);
    return result;
}


Object.keys($13ce8c4006281841$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $13ce8c4006281841$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $13ce8c4006281841$exports[key];
        }
    });
});
var $de039aa8efacc9bf$exports = {};

$parcel$export($de039aa8efacc9bf$exports, "formatISO", () => $de039aa8efacc9bf$export$3c826ac3ab9da76c, (v) => $de039aa8efacc9bf$export$3c826ac3ab9da76c = v);
var $de039aa8efacc9bf$export$3c826ac3ab9da76c;
"use strict";
$de039aa8efacc9bf$export$3c826ac3ab9da76c = $de039aa8efacc9bf$var$formatISO;


/**
 * The {@link formatISO} function options.
 */ /**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in loca.l time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */ function $de039aa8efacc9bf$var$formatISO(date, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (isNaN(_date.getTime())) throw new RangeError("Invalid time value");
    const format = options?.format ?? "extended";
    const representation = options?.representation ?? "complete";
    let result = "";
    let tzOffset = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getDate(), 2);
        const month = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getMonth() + 1, 2);
        const year = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        // Add the timezone.
        const offset = _date.getTimezoneOffset();
        if (offset !== 0) {
            const absoluteOffset = Math.abs(offset);
            const hourOffset = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(Math.trunc(absoluteOffset / 60), 2);
            const minuteOffset = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(absoluteOffset % 60, 2);
            // If less than 0, the sign is +, because it is ahead of time.
            const sign = offset < 0 ? "+" : "-";
            tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
        } else tzOffset = "Z";
        const hour = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getHours(), 2);
        const minute = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getMinutes(), 2);
        const second = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getSeconds(), 2);
        // If there's also date, separate it with time with 'T'
        const separator = result === "" ? "" : "T";
        // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
        const time = [
            hour,
            minute,
            second
        ].join(timeDelimiter);
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${time}${tzOffset}`;
    }
    return result;
}


Object.keys($de039aa8efacc9bf$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $de039aa8efacc9bf$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $de039aa8efacc9bf$exports[key];
        }
    });
});
var $49e20ec18f277f6c$exports = {};

$parcel$export($49e20ec18f277f6c$exports, "formatISO9075", () => $49e20ec18f277f6c$export$a673944250043fa4, (v) => $49e20ec18f277f6c$export$a673944250043fa4 = v);
var $49e20ec18f277f6c$export$a673944250043fa4;
"use strict";
$49e20ec18f277f6c$export$a673944250043fa4 = $49e20ec18f277f6c$var$formatISO9075;



/**
 * The {@link formatISO9075} function options.
 */ /**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52'
 */ function $49e20ec18f277f6c$var$formatISO9075(date, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (!(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(_date)) throw new RangeError("Invalid time value");
    const format = options?.format ?? "extended";
    const representation = options?.representation ?? "complete";
    let result = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getDate(), 2);
        const month = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getMonth() + 1, 2);
        const year = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        const hour = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getHours(), 2);
        const minute = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getMinutes(), 2);
        const second = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getSeconds(), 2);
        // If there's also date, separate it with time with a space
        const separator = result === "" ? "" : " ";
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
    }
    return result;
}


Object.keys($49e20ec18f277f6c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $49e20ec18f277f6c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $49e20ec18f277f6c$exports[key];
        }
    });
});
var $d2c54148ee8144e0$exports = {};

$parcel$export($d2c54148ee8144e0$exports, "formatISODuration", () => $d2c54148ee8144e0$export$437c31ab743f6b26, (v) => $d2c54148ee8144e0$export$437c31ab743f6b26 = v);
var $d2c54148ee8144e0$export$437c31ab743f6b26;
"use strict";
$d2c54148ee8144e0$export$437c31ab743f6b26 = $d2c54148ee8144e0$var$formatISODuration;
/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs//90001488-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param duration - The duration to format
 *
 * @returns The ISO 8601 duration string
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */ function $d2c54148ee8144e0$var$formatISODuration(duration) {
    const { years: years = 0, months: months = 0, days: days = 0, hours: hours = 0, minutes: minutes = 0, seconds: seconds = 0 } = duration;
    return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`;
}


Object.keys($d2c54148ee8144e0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d2c54148ee8144e0$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d2c54148ee8144e0$exports[key];
        }
    });
});
var $e41f317a1317cb11$exports = {};

$parcel$export($e41f317a1317cb11$exports, "formatRFC3339", () => $e41f317a1317cb11$export$6d441bffeec6bd6c, (v) => $e41f317a1317cb11$export$6d441bffeec6bd6c = v);
var $e41f317a1317cb11$export$6d441bffeec6bd6c;
"use strict";
$e41f317a1317cb11$export$6d441bffeec6bd6c = $e41f317a1317cb11$var$formatRFC3339;



/**
 * The {@link formatRFC3339} function options.
 */ /**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), {
 *   fractionDigits: 3
 * })
 * //=> '2019-09-18T19:00:52.234Z'
 */ function $e41f317a1317cb11$var$formatRFC3339(date, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (!(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(_date)) throw new RangeError("Invalid time value");
    const fractionDigits = options?.fractionDigits ?? 0;
    const day = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getDate(), 2);
    const month = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getMonth() + 1, 2);
    const year = _date.getFullYear();
    const hour = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getHours(), 2);
    const minute = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getMinutes(), 2);
    const second = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getSeconds(), 2);
    let fractionalSecond = "";
    if (fractionDigits > 0) {
        const milliseconds = _date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, fractionDigits - 3));
        fractionalSecond = "." + (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(fractionalSeconds, fractionDigits);
    }
    let offset = "";
    const tzOffset = _date.getTimezoneOffset();
    if (tzOffset !== 0) {
        const absoluteOffset = Math.abs(tzOffset);
        const hourOffset = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(Math.trunc(absoluteOffset / 60), 2);
        const minuteOffset = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(absoluteOffset % 60, 2);
        // If less than 0, the sign is +, because it is ahead of time.
        const sign = tzOffset < 0 ? "+" : "-";
        offset = `${sign}${hourOffset}:${minuteOffset}`;
    } else offset = "Z";
    return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
}


Object.keys($e41f317a1317cb11$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e41f317a1317cb11$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e41f317a1317cb11$exports[key];
        }
    });
});
var $cfb2b76ea1953da6$exports = {};

$parcel$export($cfb2b76ea1953da6$exports, "formatRFC7231", () => $cfb2b76ea1953da6$export$7add2e4539ce658a, (v) => $cfb2b76ea1953da6$export$7add2e4539ce658a = v);
var $cfb2b76ea1953da6$export$7add2e4539ce658a;
"use strict";
$cfb2b76ea1953da6$export$7add2e4539ce658a = $cfb2b76ea1953da6$var$formatRFC7231;



const $cfb2b76ea1953da6$var$days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const $cfb2b76ea1953da6$var$months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */ function $cfb2b76ea1953da6$var$formatRFC7231(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (!(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(_date)) throw new RangeError("Invalid time value");
    const dayName = $cfb2b76ea1953da6$var$days[_date.getUTCDay()];
    const dayOfMonth = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getUTCDate(), 2);
    const monthName = $cfb2b76ea1953da6$var$months[_date.getUTCMonth()];
    const year = _date.getUTCFullYear();
    const hour = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getUTCHours(), 2);
    const minute = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getUTCMinutes(), 2);
    const second = (0, $bcd12fce1c0a1b4e$export$c8306e720e213c0f)(_date.getUTCSeconds(), 2);
    // Result variables.
    return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}


Object.keys($cfb2b76ea1953da6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $cfb2b76ea1953da6$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $cfb2b76ea1953da6$exports[key];
        }
    });
});
var $98ae19bf1874fa6c$exports = {};

$parcel$export($98ae19bf1874fa6c$exports, "formatRelative", () => $98ae19bf1874fa6c$export$8fbbfd65594f46a0, (v) => $98ae19bf1874fa6c$export$8fbbfd65594f46a0 = v);
var $98ae19bf1874fa6c$export$8fbbfd65594f46a0;
"use strict";
$98ae19bf1874fa6c$export$8fbbfd65594f46a0 = $98ae19bf1874fa6c$var$formatRelative;





/**
 * The {@link formatRelative} function options.
 */ /**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The date in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(subDays(new Date(), 6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */ function $98ae19bf1874fa6c$var$formatRelative(date, baseDate, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const _baseDate = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(baseDate);
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const locale = options?.locale ?? defaultOptions.locale ?? $0bf869c88d95e2b3$exports.defaultLocale;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const diff = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(_date, _baseDate);
    if (isNaN(diff)) throw new RangeError("Invalid time value");
    let token;
    if (diff < -6) token = "other";
    else if (diff < -1) token = "lastWeek";
    else if (diff < 0) token = "yesterday";
    else if (diff < 1) token = "today";
    else if (diff < 2) token = "tomorrow";
    else if (diff < 7) token = "nextWeek";
    else token = "other";
    const formatStr = locale.formatRelative(token, _date, _baseDate, {
        locale: locale,
        weekStartsOn: weekStartsOn
    });
    return (0, $d8509d24c4e1372f$exports.format)(_date, formatStr, {
        locale: locale,
        weekStartsOn: weekStartsOn
    });
}


Object.keys($98ae19bf1874fa6c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $98ae19bf1874fa6c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $98ae19bf1874fa6c$exports[key];
        }
    });
});
var $73ef889f2599af71$exports = {};

$parcel$export($73ef889f2599af71$exports, "fromUnixTime", () => $73ef889f2599af71$export$3664df8597731ed4, (v) => $73ef889f2599af71$export$3664df8597731ed4 = v);
var $73ef889f2599af71$export$3664df8597731ed4;
"use strict";
$73ef889f2599af71$export$3664df8597731ed4 = $73ef889f2599af71$var$fromUnixTime;

/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param unixTime - The given Unix timestamp (in seconds)
 *
 * @returns The date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */ function $73ef889f2599af71$var$fromUnixTime(unixTime) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(unixTime * 1000);
}


Object.keys($73ef889f2599af71$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $73ef889f2599af71$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $73ef889f2599af71$exports[key];
        }
    });
});
var $91b3471f19ceb0d9$exports = {};

$parcel$export($91b3471f19ceb0d9$exports, "getDate", () => $91b3471f19ceb0d9$export$aa350b96d91cd94, (v) => $91b3471f19ceb0d9$export$aa350b96d91cd94 = v);
var $91b3471f19ceb0d9$export$aa350b96d91cd94;
"use strict";
$91b3471f19ceb0d9$export$aa350b96d91cd94 = $91b3471f19ceb0d9$var$getDate;

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */ function $91b3471f19ceb0d9$var$getDate(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const dayOfMonth = _date.getDate();
    return dayOfMonth;
}


Object.keys($91b3471f19ceb0d9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $91b3471f19ceb0d9$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $91b3471f19ceb0d9$exports[key];
        }
    });
});
var $573b7090c7eca26f$exports = {};

$parcel$export($573b7090c7eca26f$exports, "getDay", () => $573b7090c7eca26f$export$1b64bc9c5306ed54, (v) => $573b7090c7eca26f$export$1b64bc9c5306ed54 = v);
var $573b7090c7eca26f$export$1b64bc9c5306ed54;
"use strict";
$573b7090c7eca26f$export$1b64bc9c5306ed54 = $573b7090c7eca26f$var$getDay;

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */ function $573b7090c7eca26f$var$getDay(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const day = _date.getDay();
    return day;
}


Object.keys($573b7090c7eca26f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $573b7090c7eca26f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $573b7090c7eca26f$exports[key];
        }
    });
});

Object.keys($e6bce2123ee27fd3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e6bce2123ee27fd3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e6bce2123ee27fd3$exports[key];
        }
    });
});
var $9ace231e9e50a89b$exports = {};

$parcel$export($9ace231e9e50a89b$exports, "getDaysInMonth", () => $9ace231e9e50a89b$export$f645ddd439eb259d, (v) => $9ace231e9e50a89b$export$f645ddd439eb259d = v);
var $9ace231e9e50a89b$export$f645ddd439eb259d;
"use strict";
$9ace231e9e50a89b$export$f645ddd439eb259d = $9ace231e9e50a89b$var$getDaysInMonth;


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */ function $9ace231e9e50a89b$var$getDaysInMonth(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const monthIndex = _date.getMonth();
    const lastDayOfMonth = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}


Object.keys($9ace231e9e50a89b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9ace231e9e50a89b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9ace231e9e50a89b$exports[key];
        }
    });
});
var $741c43571966bb6c$exports = {};

$parcel$export($741c43571966bb6c$exports, "getDaysInYear", () => $741c43571966bb6c$export$63a4a9fc49e3550e, (v) => $741c43571966bb6c$export$63a4a9fc49e3550e = v);
var $741c43571966bb6c$export$63a4a9fc49e3550e;
"use strict";
$741c43571966bb6c$export$63a4a9fc49e3550e = $741c43571966bb6c$var$getDaysInYear;
var $c86edce872b2d624$exports = {};

$parcel$export($c86edce872b2d624$exports, "isLeapYear", () => $c86edce872b2d624$export$553d7fa8e3805fc0, (v) => $c86edce872b2d624$export$553d7fa8e3805fc0 = v);
var $c86edce872b2d624$export$553d7fa8e3805fc0;
"use strict";
$c86edce872b2d624$export$553d7fa8e3805fc0 = $c86edce872b2d624$var$isLeapYear;

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */ function $c86edce872b2d624$var$isLeapYear(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}



/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */ function $741c43571966bb6c$var$getDaysInYear(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (String(new Date(_date)) === "Invalid Date") return NaN;
    return (0, $c86edce872b2d624$export$553d7fa8e3805fc0)(_date) ? 366 : 365;
}


Object.keys($741c43571966bb6c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $741c43571966bb6c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $741c43571966bb6c$exports[key];
        }
    });
});
var $8e44d5efa4b309d6$exports = {};

$parcel$export($8e44d5efa4b309d6$exports, "getDecade", () => $8e44d5efa4b309d6$export$5bc0f4decfc52b64, (v) => $8e44d5efa4b309d6$export$5bc0f4decfc52b64 = v);
var $8e44d5efa4b309d6$export$5bc0f4decfc52b64;
"use strict";
$8e44d5efa4b309d6$export$5bc0f4decfc52b64 = $8e44d5efa4b309d6$var$getDecade;

/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The year of decade
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */ function $8e44d5efa4b309d6$var$getDecade(date) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const decade = Math.floor(year / 10) * 10;
    return decade;
}


Object.keys($8e44d5efa4b309d6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8e44d5efa4b309d6$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8e44d5efa4b309d6$exports[key];
        }
    });
});
var $4127fd6b0fb80006$exports = {};

$parcel$export($4127fd6b0fb80006$exports, "getDefaultOptions", () => $4127fd6b0fb80006$export$430a3269e24b912e, (v) => $4127fd6b0fb80006$export$430a3269e24b912e = v);
var $4127fd6b0fb80006$export$430a3269e24b912e;
"use strict";
$4127fd6b0fb80006$export$430a3269e24b912e = $4127fd6b0fb80006$var$getDefaultOptions;

/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */ function $4127fd6b0fb80006$var$getDefaultOptions() {
    return Object.assign({}, (0, $bdae7381d85d289e$export$430a3269e24b912e)());
}


Object.keys($4127fd6b0fb80006$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4127fd6b0fb80006$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4127fd6b0fb80006$exports[key];
        }
    });
});
var $30710a24d028a6f9$exports = {};

$parcel$export($30710a24d028a6f9$exports, "getHours", () => $30710a24d028a6f9$export$257b40f71c07d58f, (v) => $30710a24d028a6f9$export$257b40f71c07d58f = v);
var $30710a24d028a6f9$export$257b40f71c07d58f;
"use strict";
$30710a24d028a6f9$export$257b40f71c07d58f = $30710a24d028a6f9$var$getHours;

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */ function $30710a24d028a6f9$var$getHours(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const hours = _date.getHours();
    return hours;
}


Object.keys($30710a24d028a6f9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $30710a24d028a6f9$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $30710a24d028a6f9$exports[key];
        }
    });
});
var $6d8f62449eb8873e$exports = {};

$parcel$export($6d8f62449eb8873e$exports, "getISODay", () => $6d8f62449eb8873e$export$c514f4c1a8ed5e9e, (v) => $6d8f62449eb8873e$export$c514f4c1a8ed5e9e = v);
var $6d8f62449eb8873e$export$c514f4c1a8ed5e9e;
"use strict";
$6d8f62449eb8873e$export$c514f4c1a8ed5e9e = $6d8f62449eb8873e$var$getISODay;

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */ function $6d8f62449eb8873e$var$getISODay(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    let day = _date.getDay();
    if (day === 0) day = 7;
    return day;
}


Object.keys($6d8f62449eb8873e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $6d8f62449eb8873e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $6d8f62449eb8873e$exports[key];
        }
    });
});

Object.keys($318ab28058dd7297$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $318ab28058dd7297$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $318ab28058dd7297$exports[key];
        }
    });
});

Object.keys($f406a700497c04bb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f406a700497c04bb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f406a700497c04bb$exports[key];
        }
    });
});
var $ca5b625c8dfc67c2$exports = {};

$parcel$export($ca5b625c8dfc67c2$exports, "getISOWeeksInYear", () => $ca5b625c8dfc67c2$export$822983242a16750f, (v) => $ca5b625c8dfc67c2$export$822983242a16750f = v);
var $ca5b625c8dfc67c2$export$822983242a16750f;
"use strict";
$ca5b625c8dfc67c2$export$822983242a16750f = $ca5b625c8dfc67c2$var$getISOWeeksInYear;



/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */ function $ca5b625c8dfc67c2$var$getISOWeeksInYear(date) {
    const thisYear = (0, $18db251bc9893458$export$236bdfa374eb69a9)(date);
    const nextYear = (0, $18db251bc9893458$export$236bdfa374eb69a9)((0, $24685c5ea669773d$export$ef501a2bb4f3ee6b)(thisYear, 60));
    const diff = +nextYear - +thisYear;
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / $14ce387571ca9ade$export$4fad13613e88edc8);
}


Object.keys($ca5b625c8dfc67c2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ca5b625c8dfc67c2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ca5b625c8dfc67c2$exports[key];
        }
    });
});
var $a4af406e68a00e1f$exports = {};

$parcel$export($a4af406e68a00e1f$exports, "getMilliseconds", () => $a4af406e68a00e1f$export$b8e4380f312797af, (v) => $a4af406e68a00e1f$export$b8e4380f312797af = v);
var $a4af406e68a00e1f$export$b8e4380f312797af;
"use strict";
$a4af406e68a00e1f$export$b8e4380f312797af = $a4af406e68a00e1f$var$getMilliseconds;

/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */ function $a4af406e68a00e1f$var$getMilliseconds(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const milliseconds = _date.getMilliseconds();
    return milliseconds;
}


Object.keys($a4af406e68a00e1f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a4af406e68a00e1f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a4af406e68a00e1f$exports[key];
        }
    });
});
var $411622107efd1835$exports = {};

$parcel$export($411622107efd1835$exports, "getMinutes", () => $411622107efd1835$export$b7f1bc3ea3ac4145, (v) => $411622107efd1835$export$b7f1bc3ea3ac4145 = v);
var $411622107efd1835$export$b7f1bc3ea3ac4145;
"use strict";
$411622107efd1835$export$b7f1bc3ea3ac4145 = $411622107efd1835$var$getMinutes;

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */ function $411622107efd1835$var$getMinutes(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const minutes = _date.getMinutes();
    return minutes;
}


Object.keys($411622107efd1835$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $411622107efd1835$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $411622107efd1835$exports[key];
        }
    });
});
var $3c2016453e124aef$exports = {};

$parcel$export($3c2016453e124aef$exports, "getMonth", () => $3c2016453e124aef$export$6ce1b5acc29cb53b, (v) => $3c2016453e124aef$export$6ce1b5acc29cb53b = v);
var $3c2016453e124aef$export$6ce1b5acc29cb53b;
"use strict";
$3c2016453e124aef$export$6ce1b5acc29cb53b = $3c2016453e124aef$var$getMonth;

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */ function $3c2016453e124aef$var$getMonth(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const month = _date.getMonth();
    return month;
}


Object.keys($3c2016453e124aef$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3c2016453e124aef$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3c2016453e124aef$exports[key];
        }
    });
});
var $c78ef5f256916353$exports = {};

$parcel$export($c78ef5f256916353$exports, "getOverlappingDaysInIntervals", () => $c78ef5f256916353$export$baae148532bd1d46, (v) => $c78ef5f256916353$export$baae148532bd1d46 = v);
var $c78ef5f256916353$export$baae148532bd1d46;
"use strict";
$c78ef5f256916353$export$baae148532bd1d46 = $c78ef5f256916353$var$getOverlappingDaysInIntervals;



/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals. It uses the time
 * between dates to calculate the number of days, rounding it up to include
 * partial days.
 *
 * Two equal 0-length intervals will result in 0. Two equal 1ms intervals will
 * result in 1.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 *
 * @returns The number of days that overlap in two time intervals
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */ function $c78ef5f256916353$var$getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
    const [leftStart, leftEnd] = [
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalLeft.start),
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalLeft.end)
    ].sort((a, b)=>a - b);
    const [rightStart, rightEnd] = [
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalRight.start),
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(intervalRight.end)
    ].sort((a, b)=>a - b);
    // Prevent NaN result if intervals don't overlap at all.
    const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
    if (!isOverlapping) return 0;
    // Remove the timezone offset to negate the DST effect on calculations.
    const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
    const left = overlapLeft - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(overlapLeft);
    const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
    const right = overlapRight - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(overlapRight);
    // Ceil the number to include partial days too.
    return Math.ceil((right - left) / $14ce387571ca9ade$export$b76b1809a2898f9a);
}


Object.keys($c78ef5f256916353$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c78ef5f256916353$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c78ef5f256916353$exports[key];
        }
    });
});

Object.keys($2286b42f076ade7e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2286b42f076ade7e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2286b42f076ade7e$exports[key];
        }
    });
});
var $261fd4a0d106bf47$exports = {};

$parcel$export($261fd4a0d106bf47$exports, "getSeconds", () => $261fd4a0d106bf47$export$5e9417507ff28427, (v) => $261fd4a0d106bf47$export$5e9417507ff28427 = v);
var $261fd4a0d106bf47$export$5e9417507ff28427;
"use strict";
$261fd4a0d106bf47$export$5e9417507ff28427 = $261fd4a0d106bf47$var$getSeconds;

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */ function $261fd4a0d106bf47$var$getSeconds(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const seconds = _date.getSeconds();
    return seconds;
}


Object.keys($261fd4a0d106bf47$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $261fd4a0d106bf47$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $261fd4a0d106bf47$exports[key];
        }
    });
});
var $86066f6a55e68c73$exports = {};

$parcel$export($86066f6a55e68c73$exports, "getTime", () => $86066f6a55e68c73$export$1428f42a7de81803, (v) => $86066f6a55e68c73$export$1428f42a7de81803 = v);
var $86066f6a55e68c73$export$1428f42a7de81803;
"use strict";
$86066f6a55e68c73$export$1428f42a7de81803 = $86066f6a55e68c73$var$getTime;

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */ function $86066f6a55e68c73$var$getTime(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const timestamp = _date.getTime();
    return timestamp;
}


Object.keys($86066f6a55e68c73$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $86066f6a55e68c73$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $86066f6a55e68c73$exports[key];
        }
    });
});
var $e57d9bec3e788aa4$exports = {};

$parcel$export($e57d9bec3e788aa4$exports, "getUnixTime", () => $e57d9bec3e788aa4$export$1f77c0008d16313, (v) => $e57d9bec3e788aa4$export$1f77c0008d16313 = v);
var $e57d9bec3e788aa4$export$1f77c0008d16313;
"use strict";
$e57d9bec3e788aa4$export$1f77c0008d16313 = $e57d9bec3e788aa4$var$getUnixTime;

/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */ function $e57d9bec3e788aa4$var$getUnixTime(date) {
    return Math.trunc(+(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date) / 1000);
}


Object.keys($e57d9bec3e788aa4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e57d9bec3e788aa4$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e57d9bec3e788aa4$exports[key];
        }
    });
});

Object.keys($518ac188edcd4918$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $518ac188edcd4918$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $518ac188edcd4918$exports[key];
        }
    });
});
var $83b4a2e36b99fc77$exports = {};

$parcel$export($83b4a2e36b99fc77$exports, "getWeekOfMonth", () => $83b4a2e36b99fc77$export$59fb9b85a4d8d027, (v) => $83b4a2e36b99fc77$export$59fb9b85a4d8d027 = v);
var $83b4a2e36b99fc77$export$59fb9b85a4d8d027;
"use strict";
$83b4a2e36b99fc77$export$59fb9b85a4d8d027 = $83b4a2e36b99fc77$var$getWeekOfMonth;




/**
 * The {@link getWeekOfMonth} function options.
 */ /**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */ function $83b4a2e36b99fc77$var$getWeekOfMonth(date, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const currentDayOfMonth = (0, $91b3471f19ceb0d9$export$aa350b96d91cd94)(date);
    if (isNaN(currentDayOfMonth)) return NaN;
    const startWeekDay = (0, $573b7090c7eca26f$export$1b64bc9c5306ed54)((0, $1dd0db739263b27f$export$a5a3b454ada2268e)(date));
    let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
    if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}


Object.keys($83b4a2e36b99fc77$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $83b4a2e36b99fc77$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $83b4a2e36b99fc77$exports[key];
        }
    });
});

Object.keys($775230ee08a3e430$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $775230ee08a3e430$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $775230ee08a3e430$exports[key];
        }
    });
});
var $c38755dccbb15ea2$exports = {};

$parcel$export($c38755dccbb15ea2$exports, "getWeeksInMonth", () => $c38755dccbb15ea2$export$ccc1b2479e7dd654, (v) => $c38755dccbb15ea2$export$ccc1b2479e7dd654 = v);
var $c38755dccbb15ea2$export$ccc1b2479e7dd654;
"use strict";
$c38755dccbb15ea2$export$ccc1b2479e7dd654 = $c38755dccbb15ea2$var$getWeeksInMonth;

var $1393e86dcdb7cd43$exports = {};

$parcel$export($1393e86dcdb7cd43$exports, "lastDayOfMonth", () => $1393e86dcdb7cd43$export$36818250d6c87922, (v) => $1393e86dcdb7cd43$export$36818250d6c87922 = v);
var $1393e86dcdb7cd43$export$36818250d6c87922;
"use strict";
$1393e86dcdb7cd43$export$36818250d6c87922 = $1393e86dcdb7cd43$var$lastDayOfMonth;

/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */ function $1393e86dcdb7cd43$var$lastDayOfMonth(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(0, 0, 0, 0);
    return _date;
}



/**
 * The {@link getWeeksInMonth} function options.
 */ /**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */ function $c38755dccbb15ea2$var$getWeeksInMonth(date, options) {
    return (0, $b920c8e3ef83c243$export$6ed034ce62348e4)((0, $1393e86dcdb7cd43$export$36818250d6c87922)(date), (0, $1dd0db739263b27f$export$a5a3b454ada2268e)(date), options) + 1;
}


Object.keys($c38755dccbb15ea2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c38755dccbb15ea2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c38755dccbb15ea2$exports[key];
        }
    });
});
var $a34d1805f2109f4d$exports = {};

$parcel$export($a34d1805f2109f4d$exports, "getYear", () => $a34d1805f2109f4d$export$5846dc2d57a5c860, (v) => $a34d1805f2109f4d$export$5846dc2d57a5c860 = v);
var $a34d1805f2109f4d$export$5846dc2d57a5c860;
"use strict";
$a34d1805f2109f4d$export$5846dc2d57a5c860 = $a34d1805f2109f4d$var$getYear;

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */ function $a34d1805f2109f4d$var$getYear(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getFullYear();
}


Object.keys($a34d1805f2109f4d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a34d1805f2109f4d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a34d1805f2109f4d$exports[key];
        }
    });
});
var $90b274101b28d92c$exports = {};

$parcel$export($90b274101b28d92c$exports, "hoursToMilliseconds", () => $90b274101b28d92c$export$5b42ab7a22898b69, (v) => $90b274101b28d92c$export$5b42ab7a22898b69 = v);
var $90b274101b28d92c$export$5b42ab7a22898b69;
"use strict";
$90b274101b28d92c$export$5b42ab7a22898b69 = $90b274101b28d92c$var$hoursToMilliseconds;

/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted to milliseconds
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */ function $90b274101b28d92c$var$hoursToMilliseconds(hours) {
    return Math.trunc(hours * $14ce387571ca9ade$export$7f72910d6dfd237a);
}


Object.keys($90b274101b28d92c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $90b274101b28d92c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $90b274101b28d92c$exports[key];
        }
    });
});
var $e1388dbab60dd9d2$exports = {};

$parcel$export($e1388dbab60dd9d2$exports, "hoursToMinutes", () => $e1388dbab60dd9d2$export$83bfc73cdf89a4d8, (v) => $e1388dbab60dd9d2$export$83bfc73cdf89a4d8 = v);
var $e1388dbab60dd9d2$export$83bfc73cdf89a4d8;
"use strict";
$e1388dbab60dd9d2$export$83bfc73cdf89a4d8 = $e1388dbab60dd9d2$var$hoursToMinutes;

/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted in minutes
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */ function $e1388dbab60dd9d2$var$hoursToMinutes(hours) {
    return Math.trunc(hours * $14ce387571ca9ade$export$f2f5ae5a8e2d8f9f);
}


Object.keys($e1388dbab60dd9d2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e1388dbab60dd9d2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e1388dbab60dd9d2$exports[key];
        }
    });
});
var $e968101e0e0d55ae$exports = {};

$parcel$export($e968101e0e0d55ae$exports, "hoursToSeconds", () => $e968101e0e0d55ae$export$59b1396ccbd5a4e1, (v) => $e968101e0e0d55ae$export$59b1396ccbd5a4e1 = v);
var $e968101e0e0d55ae$export$59b1396ccbd5a4e1;
"use strict";
$e968101e0e0d55ae$export$59b1396ccbd5a4e1 = $e968101e0e0d55ae$var$hoursToSeconds;

/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param hours - The number of hours to be converted
 *
 * @returns The number of hours converted in seconds
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */ function $e968101e0e0d55ae$var$hoursToSeconds(hours) {
    return Math.trunc(hours * $14ce387571ca9ade$export$698aec755e92c695);
}


Object.keys($e968101e0e0d55ae$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e968101e0e0d55ae$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e968101e0e0d55ae$exports[key];
        }
    });
});
var $6125be2cfb25b5cb$exports = {};

$parcel$export($6125be2cfb25b5cb$exports, "interval", () => $6125be2cfb25b5cb$export$3174cdbf0a0cbc84, (v) => $6125be2cfb25b5cb$export$3174cdbf0a0cbc84 = v);
var $6125be2cfb25b5cb$export$3174cdbf0a0cbc84;
"use strict";
$6125be2cfb25b5cb$export$3174cdbf0a0cbc84 = $6125be2cfb25b5cb$var$interval;

/**
 * The {@link interval} function options.
 */ /**
 * @name interval
 * @category Interval Helpers
 * @summary Creates an interval object and validates its values.
 *
 * @description
 * Creates a normalized interval object and validates its values. If the interval is invalid, an exception is thrown.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param start - The start of the interval.
 * @param end - The end of the interval.
 * @param options - The options object.
 *
 * @throws `Start date is invalid` when `start` is invalid.
 * @throws `End date is invalid` when `end` is invalid.
 * @throws `End date must be after start date` when end is before `start` and `options.assertPositive` is true.
 *
 * @returns The normalized and validated interval object.
 */ function $6125be2cfb25b5cb$var$interval(start, end, options) {
    const _start = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(start);
    if (isNaN(+_start)) throw new TypeError("Start date is invalid");
    const _end = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(end);
    if (isNaN(+_end)) throw new TypeError("End date is invalid");
    if (options?.assertPositive && +_start > +_end) throw new TypeError("End date must be after start date");
    return {
        start: _start,
        end: _end
    };
}


Object.keys($6125be2cfb25b5cb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $6125be2cfb25b5cb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $6125be2cfb25b5cb$exports[key];
        }
    });
});
var $8d12b44a0c1b0b30$exports = {};

$parcel$export($8d12b44a0c1b0b30$exports, "intervalToDuration", () => $8d12b44a0c1b0b30$export$7b6c9a626316863, (v) => $8d12b44a0c1b0b30$export$7b6c9a626316863 = v);
var $8d12b44a0c1b0b30$export$7b6c9a626316863;
"use strict";
$8d12b44a0c1b0b30$export$7b6c9a626316863 = $8d12b44a0c1b0b30$var$intervalToDuration;








/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval to convert to duration
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */ function $8d12b44a0c1b0b30$var$intervalToDuration(interval) {
    const start = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start);
    const end = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end);
    const duration = {};
    const years = (0, $b67404e6d4dcc35a$export$ed6bf486f68899ca)(end, start);
    if (years) duration.years = years;
    const remainingMonths = (0, $a61a3c644f111cd7$export$e16d8520af44a096)(start, {
        years: duration.years
    });
    const months = (0, $9b90f60f249aa3d3$export$fc1ed482c2861792)(end, remainingMonths);
    if (months) duration.months = months;
    const remainingDays = (0, $a61a3c644f111cd7$export$e16d8520af44a096)(remainingMonths, {
        months: duration.months
    });
    const days = (0, $699dd14ae2bdd9c8$export$86415ebf4eb36b8c)(end, remainingDays);
    if (days) duration.days = days;
    const remainingHours = (0, $a61a3c644f111cd7$export$e16d8520af44a096)(remainingDays, {
        days: duration.days
    });
    const hours = (0, $87da13e55b9625f9$export$5436ca250d4d6872)(end, remainingHours);
    if (hours) duration.hours = hours;
    const remainingMinutes = (0, $a61a3c644f111cd7$export$e16d8520af44a096)(remainingHours, {
        hours: duration.hours
    });
    const minutes = (0, $7d44baa7fa705de3$export$d904251335be481a)(end, remainingMinutes);
    if (minutes) duration.minutes = minutes;
    const remainingSeconds = (0, $a61a3c644f111cd7$export$e16d8520af44a096)(remainingMinutes, {
        minutes: duration.minutes
    });
    const seconds = (0, $91dc20cd92c46375$export$c1889aec51783710)(end, remainingSeconds);
    if (seconds) duration.seconds = seconds;
    return duration;
}


Object.keys($8d12b44a0c1b0b30$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8d12b44a0c1b0b30$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8d12b44a0c1b0b30$exports[key];
        }
    });
});
var $c679f17a88db5286$exports = {};

$parcel$export($c679f17a88db5286$exports, "intlFormat", () => $c679f17a88db5286$export$f58f1234eed71f82, (v) => $c679f17a88db5286$export$f58f1234eed71f82 = v);
var $c679f17a88db5286$export$f58f1234eed71f82;
"use strict";
$c679f17a88db5286$export$f58f1234eed71f82 = $c679f17a88db5286$var$intlFormat;

/**
 * The locale string (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
 */ /**
 * The format options (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)
 */ /**
 * The locale options.
 */ /**
 * @name intlFormat
 * @category Common Helpers
 * @summary Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */ /**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   locale: 'ko-KR',
 * })
 * //=> 2019. 10. 4.
 */ /**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param formatOptions - The format options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   year: 'numeric',
 *   month: 'numeric',
 *   day: 'numeric',
 *   hour: 'numeric',
 * })
 * //=> 10/4/2019, 12 PM
 */ /**
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param formatOptions - The format options
 * @param localeOptions - An object with locale
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 4 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *   weekday: 'long',
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric',
 * }, {
 *   locale: 'de-DE',
 * })
 * //=> Freitag, 4. Oktober 2019
 */ function $c679f17a88db5286$var$intlFormat(date, formatOrLocale, localeOptions) {
    let formatOptions;
    if ($c679f17a88db5286$var$isFormatOptions(formatOrLocale)) formatOptions = formatOrLocale;
    else localeOptions = formatOrLocale;
    return new Intl.DateTimeFormat(localeOptions?.locale, formatOptions).format((0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date));
}
function $c679f17a88db5286$var$isFormatOptions(opts) {
    return opts !== undefined && !("locale" in opts);
}


Object.keys($c679f17a88db5286$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c679f17a88db5286$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c679f17a88db5286$exports[key];
        }
    });
});
var $f5e7fb270e3da277$exports = {};

$parcel$export($f5e7fb270e3da277$exports, "intlFormatDistance", () => $f5e7fb270e3da277$export$a110a4020280fd5, (v) => $f5e7fb270e3da277$export$a110a4020280fd5 = v);
var $f5e7fb270e3da277$export$a110a4020280fd5;
"use strict";
$f5e7fb270e3da277$export$a110a4020280fd5 = $f5e7fb270e3da277$var$intlFormatDistance;










/**
 * The {@link intlFormatDistance} function options.
 */ /**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */ /**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date
 * @param baseDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */ function $f5e7fb270e3da277$var$intlFormatDistance(date, baseDate, options) {
    let value = 0;
    let unit;
    const dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(baseDate);
    if (!options?.unit) {
        // Get the unit based on diffInSeconds calculations if no unit is specified
        const diffInSeconds = (0, $91dc20cd92c46375$export$c1889aec51783710)(dateLeft, dateRight); // The smallest unit
        if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$a77c1a7ebebe2a5a) {
            value = (0, $91dc20cd92c46375$export$c1889aec51783710)(dateLeft, dateRight);
            unit = "second";
        } else if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$698aec755e92c695) {
            value = (0, $7d44baa7fa705de3$export$d904251335be481a)(dateLeft, dateRight);
            unit = "minute";
        } else if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$815a9362476d2fe3 && Math.abs((0, $f4468be34bc84842$export$4a02e9c37dab4871)(dateLeft, dateRight)) < 1) {
            value = (0, $87da13e55b9625f9$export$5436ca250d4d6872)(dateLeft, dateRight);
            unit = "hour";
        } else if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$34804a017b31e2fe && (value = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(dateLeft, dateRight)) && Math.abs(value) < 7) unit = "day";
        else if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$8e6600bbdee7dabb) {
            value = (0, $b920c8e3ef83c243$export$6ed034ce62348e4)(dateLeft, dateRight);
            unit = "week";
        } else if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$be1dccf2de902d31) {
            value = (0, $eef4eed79ead454e$export$489984ac7c996389)(dateLeft, dateRight);
            unit = "month";
        } else if (Math.abs(diffInSeconds) < $14ce387571ca9ade$export$7271e9e3478110d1) {
            if ((0, $fd4d24d79338371e$export$f62ae9fb13958c7a)(dateLeft, dateRight) < 4) {
                // To filter out cases that are less than a year but match 4 quarters
                value = (0, $fd4d24d79338371e$export$f62ae9fb13958c7a)(dateLeft, dateRight);
                unit = "quarter";
            } else {
                value = (0, $b7294975bac52cab$export$c06dce8b38891685)(dateLeft, dateRight);
                unit = "year";
            }
        } else {
            value = (0, $b7294975bac52cab$export$c06dce8b38891685)(dateLeft, dateRight);
            unit = "year";
        }
    } else {
        // Get the value if unit is specified
        unit = options?.unit;
        if (unit === "second") value = (0, $91dc20cd92c46375$export$c1889aec51783710)(dateLeft, dateRight);
        else if (unit === "minute") value = (0, $7d44baa7fa705de3$export$d904251335be481a)(dateLeft, dateRight);
        else if (unit === "hour") value = (0, $87da13e55b9625f9$export$5436ca250d4d6872)(dateLeft, dateRight);
        else if (unit === "day") value = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(dateLeft, dateRight);
        else if (unit === "week") value = (0, $b920c8e3ef83c243$export$6ed034ce62348e4)(dateLeft, dateRight);
        else if (unit === "month") value = (0, $eef4eed79ead454e$export$489984ac7c996389)(dateLeft, dateRight);
        else if (unit === "quarter") value = (0, $fd4d24d79338371e$export$f62ae9fb13958c7a)(dateLeft, dateRight);
        else if (unit === "year") value = (0, $b7294975bac52cab$export$c06dce8b38891685)(dateLeft, dateRight);
    }
    const rtf = new Intl.RelativeTimeFormat(options?.locale, {
        localeMatcher: options?.localeMatcher,
        numeric: options?.numeric || "auto",
        style: options?.style
    });
    return rtf.format(value, unit);
}


Object.keys($f5e7fb270e3da277$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f5e7fb270e3da277$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f5e7fb270e3da277$exports[key];
        }
    });
});
var $661a8016be986d43$exports = {};

$parcel$export($661a8016be986d43$exports, "isAfter", () => $661a8016be986d43$export$e4de839670987035, (v) => $661a8016be986d43$export$e4de839670987035 = v);
var $661a8016be986d43$export$e4de839670987035;
"use strict";
$661a8016be986d43$export$e4de839670987035 = $661a8016be986d43$var$isAfter;

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */ function $661a8016be986d43$var$isAfter(date, dateToCompare) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const _dateToCompare = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateToCompare);
    return _date.getTime() > _dateToCompare.getTime();
}


Object.keys($661a8016be986d43$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $661a8016be986d43$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $661a8016be986d43$exports[key];
        }
    });
});
var $9e02debf7d23d86f$exports = {};

$parcel$export($9e02debf7d23d86f$exports, "isBefore", () => $9e02debf7d23d86f$export$5c007e10c6929c95, (v) => $9e02debf7d23d86f$export$5c007e10c6929c95 = v);
var $9e02debf7d23d86f$export$5c007e10c6929c95;
"use strict";
$9e02debf7d23d86f$export$5c007e10c6929c95 = $9e02debf7d23d86f$var$isBefore;

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */ function $9e02debf7d23d86f$var$isBefore(date, dateToCompare) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const _dateToCompare = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateToCompare);
    return +_date < +_dateToCompare;
}


Object.keys($9e02debf7d23d86f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9e02debf7d23d86f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9e02debf7d23d86f$exports[key];
        }
    });
});

Object.keys($bd772bba1ace3c63$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $bd772bba1ace3c63$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $bd772bba1ace3c63$exports[key];
        }
    });
});
var $65735a62221fa420$exports = {};

$parcel$export($65735a62221fa420$exports, "isEqual", () => $65735a62221fa420$export$248d38f6296296c5, (v) => $65735a62221fa420$export$248d38f6296296c5 = v);
var $65735a62221fa420$export$248d38f6296296c5;
"use strict";
$65735a62221fa420$export$248d38f6296296c5 = $65735a62221fa420$var$isEqual;

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */ function $65735a62221fa420$var$isEqual(leftDate, rightDate) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(leftDate);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(rightDate);
    return +_dateLeft === +_dateRight;
}


Object.keys($65735a62221fa420$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $65735a62221fa420$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $65735a62221fa420$exports[key];
        }
    });
});
var $093873bd6daeada4$exports = {};

$parcel$export($093873bd6daeada4$exports, "isExists", () => $093873bd6daeada4$export$127519e0edcdc58b, (v) => $093873bd6daeada4$export$127519e0edcdc58b = v);
var $093873bd6daeada4$export$127519e0edcdc58b;
"use strict";
$093873bd6daeada4$export$127519e0edcdc58b = $093873bd6daeada4$var$isExists; /**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param year - The year of the date to check
 * @param month - The month of the date to check
 * @param day - The day of the date to check
 *
 * @returns `true` if the date exists
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */ 
function $093873bd6daeada4$var$isExists(year, month, day) {
    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}


Object.keys($093873bd6daeada4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $093873bd6daeada4$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $093873bd6daeada4$exports[key];
        }
    });
});
var $27074f9e6335e3fa$exports = {};

$parcel$export($27074f9e6335e3fa$exports, "isFirstDayOfMonth", () => $27074f9e6335e3fa$export$2716a425049f51dd, (v) => $27074f9e6335e3fa$export$2716a425049f51dd = v);
var $27074f9e6335e3fa$export$2716a425049f51dd;
"use strict";
$27074f9e6335e3fa$export$2716a425049f51dd = $27074f9e6335e3fa$var$isFirstDayOfMonth;

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check

 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */ function $27074f9e6335e3fa$var$isFirstDayOfMonth(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDate() === 1;
}


Object.keys($27074f9e6335e3fa$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $27074f9e6335e3fa$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $27074f9e6335e3fa$exports[key];
        }
    });
});
var $4b47a1df219c698b$exports = {};

$parcel$export($4b47a1df219c698b$exports, "isFriday", () => $4b47a1df219c698b$export$3b7d89f127884993, (v) => $4b47a1df219c698b$export$3b7d89f127884993 = v);
var $4b47a1df219c698b$export$3b7d89f127884993;
"use strict";
$4b47a1df219c698b$export$3b7d89f127884993 = $4b47a1df219c698b$var$isFriday;

/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */ function $4b47a1df219c698b$var$isFriday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 5;
}


Object.keys($4b47a1df219c698b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4b47a1df219c698b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4b47a1df219c698b$exports[key];
        }
    });
});
var $9e822a9f661d42bc$exports = {};

$parcel$export($9e822a9f661d42bc$exports, "isFuture", () => $9e822a9f661d42bc$export$2baac2df6018cd7, (v) => $9e822a9f661d42bc$export$2baac2df6018cd7 = v);
var $9e822a9f661d42bc$export$2baac2df6018cd7;
"use strict";
$9e822a9f661d42bc$export$2baac2df6018cd7 = $9e822a9f661d42bc$var$isFuture;

/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * const result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */ function $9e822a9f661d42bc$var$isFuture(date) {
    return +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date) > Date.now();
}


Object.keys($9e822a9f661d42bc$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9e822a9f661d42bc$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9e822a9f661d42bc$exports[key];
        }
    });
});

Object.keys($a08e51731007512d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a08e51731007512d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a08e51731007512d$exports[key];
        }
    });
});

Object.keys($c86edce872b2d624$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c86edce872b2d624$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c86edce872b2d624$exports[key];
        }
    });
});
var $75cfc96735397c99$exports = {};

$parcel$export($75cfc96735397c99$exports, "isMatch", () => $75cfc96735397c99$export$b74c33566721f70f, (v) => $75cfc96735397c99$export$b74c33566721f70f = v);
var $75cfc96735397c99$export$b74c33566721f70f;
"use strict";
$75cfc96735397c99$export$b74c33566721f70f = $75cfc96735397c99$var$isMatch;

var $ac47ffb99f1190cb$exports = {};
"use strict";
Object.defineProperty($ac47ffb99f1190cb$exports, "longFormatters", {
    enumerable: true,
    get: function() {
        return $db44f4637d14c69e$export$70cc8fd02856fd58;
    }
});
$ac47ffb99f1190cb$exports.parse = $ac47ffb99f1190cb$var$parse;
Object.defineProperty($ac47ffb99f1190cb$exports, "parsers", {
    enumerable: true,
    get: function() {
        return $9cf7572a4ef296c6$export$19131010e7fd8373;
    }
});






var $9cf7572a4ef296c6$export$19131010e7fd8373;
"use strict";
$9cf7572a4ef296c6$export$19131010e7fd8373 = void 0;
var $e6299db4447145cc$export$8e5a1d3f85a9688;
"use strict";
$e6299db4447145cc$export$8e5a1d3f85a9688 = void 0;
var $2b526269ec61b6da$export$7acfa6ed01010e37;
"use strict";
$2b526269ec61b6da$export$7acfa6ed01010e37 = void 0;
var $336cfd90b67726d5$export$9a09e32dd4990fd5;
var $336cfd90b67726d5$export$81d53e3678089a6;
var $336cfd90b67726d5$export$5aaf7ff7f09ea4ee;
"use strict";
$336cfd90b67726d5$export$9a09e32dd4990fd5 = $336cfd90b67726d5$export$81d53e3678089a6 = $336cfd90b67726d5$export$5aaf7ff7f09ea4ee = void 0;
var $8bd67f70f18caec8$exports = {};

$parcel$export($8bd67f70f18caec8$exports, "transpose", () => $8bd67f70f18caec8$export$9cb09a71b7d66923, (v) => $8bd67f70f18caec8$export$9cb09a71b7d66923 = v);
var $8bd67f70f18caec8$export$9cb09a71b7d66923;
"use strict";
$8bd67f70f18caec8$export$9cb09a71b7d66923 = $8bd67f70f18caec8$var$transpose;

/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam DateInputType - The input `Date` type derived from the passed argument.
 * @typeParam DateOutputType - The output `Date` type derived from the passed constructor.
 *
 * @param fromDate - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */ function $8bd67f70f18caec8$var$transpose(fromDate, constructor) {
    const date = constructor instanceof Date ? (0, $8079cc2f427f92af$export$ead8a1812b171991)(constructor, 0) : new constructor(0);
    date.setFullYear(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    date.setHours(fromDate.getHours(), fromDate.getMinutes(), fromDate.getSeconds(), fromDate.getMilliseconds());
    return date;
}



const $336cfd90b67726d5$var$TIMEZONE_UNIT_PRIORITY = 10;
class $336cfd90b67726d5$var$Setter {
    subPriority = 0;
    validate(_utcDate, _options) {
        return true;
    }
}
$336cfd90b67726d5$export$81d53e3678089a6 = $336cfd90b67726d5$var$Setter;
class $336cfd90b67726d5$var$ValueSetter extends $336cfd90b67726d5$var$Setter {
    constructor(value, validateValue, setValue, priority, subPriority){
        super();
        this.value = value;
        this.validateValue = validateValue;
        this.setValue = setValue;
        this.priority = priority;
        if (subPriority) this.subPriority = subPriority;
    }
    validate(date, options) {
        return this.validateValue(date, this.value, options);
    }
    set(date, flags, options) {
        return this.setValue(date, flags, this.value, options);
    }
}
$336cfd90b67726d5$export$9a09e32dd4990fd5 = $336cfd90b67726d5$var$ValueSetter;
class $336cfd90b67726d5$var$DateToSystemTimezoneSetter extends $336cfd90b67726d5$var$Setter {
    priority = $336cfd90b67726d5$var$TIMEZONE_UNIT_PRIORITY;
    subPriority = -1;
    set(date, flags) {
        if (flags.timestampIsSet) return date;
        return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, (0, $8bd67f70f18caec8$export$9cb09a71b7d66923)(date, Date));
    }
}
$336cfd90b67726d5$export$5aaf7ff7f09ea4ee = $336cfd90b67726d5$var$DateToSystemTimezoneSetter;


class $2b526269ec61b6da$var$Parser {
    run(dateString, token, match, options) {
        const result = this.parse(dateString, token, match, options);
        if (!result) return null;
        return {
            setter: new $336cfd90b67726d5$export$9a09e32dd4990fd5(result.value, this.validate, this.set, this.priority, this.subPriority),
            rest: result.rest
        };
    }
    validate(_utcDate, _value, _options) {
        return true;
    }
}
$2b526269ec61b6da$export$7acfa6ed01010e37 = $2b526269ec61b6da$var$Parser;


class $e6299db4447145cc$var$EraParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 140;
    parse(dateString, token, match) {
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return match.era(dateString, {
                    width: "abbreviated"
                }) || match.era(dateString, {
                    width: "narrow"
                });
            // A, B
            case "GGGGG":
                return match.era(dateString, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return match.era(dateString, {
                    width: "wide"
                }) || match.era(dateString, {
                    width: "abbreviated"
                }) || match.era(dateString, {
                    width: "narrow"
                });
        }
    }
    set(date, flags, value) {
        flags.era = value;
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "R",
        "u",
        "t",
        "T"
    ];
}
$e6299db4447145cc$export$8e5a1d3f85a9688 = $e6299db4447145cc$var$EraParser;


var $e7bdcad7cf29c2ca$export$48d352de7cd4a988;
"use strict";
$e7bdcad7cf29c2ca$export$48d352de7cd4a988 = void 0;

var $f2078e3cdd12598a$export$fb506d2676e7f207;
var $f2078e3cdd12598a$export$3d50627710b84d75;
var $f2078e3cdd12598a$export$4f84e3a82c7b538;
var $f2078e3cdd12598a$export$29126f735cbf69f7;
var $f2078e3cdd12598a$export$d931c43c4608a164;
var $f2078e3cdd12598a$export$513bb01536146ab6;
var $f2078e3cdd12598a$export$2c9307b2e29c533c;
var $f2078e3cdd12598a$export$cc7cc9e2a3ff9388;
var $f2078e3cdd12598a$export$6497f4c0ecdfba8e;
"use strict";
$f2078e3cdd12598a$export$fb506d2676e7f207 = $f2078e3cdd12598a$var$dayPeriodEnumToHours;
$f2078e3cdd12598a$export$3d50627710b84d75 = $f2078e3cdd12598a$var$isLeapYearIndex;
$f2078e3cdd12598a$export$4f84e3a82c7b538 = $f2078e3cdd12598a$var$mapValue;
$f2078e3cdd12598a$export$29126f735cbf69f7 = $f2078e3cdd12598a$var$normalizeTwoDigitYear;
$f2078e3cdd12598a$export$d931c43c4608a164 = $f2078e3cdd12598a$var$parseAnyDigitsSigned;
$f2078e3cdd12598a$export$513bb01536146ab6 = $f2078e3cdd12598a$var$parseNDigits;
$f2078e3cdd12598a$export$2c9307b2e29c533c = $f2078e3cdd12598a$var$parseNDigitsSigned;
$f2078e3cdd12598a$export$cc7cc9e2a3ff9388 = $f2078e3cdd12598a$var$parseNumericPattern;
$f2078e3cdd12598a$export$6497f4c0ecdfba8e = $f2078e3cdd12598a$var$parseTimezonePattern;

var $97e88d80960d9b8e$export$a7ee192b982af9c1;
var $97e88d80960d9b8e$export$c123ee06d9da8480;
"use strict";
$97e88d80960d9b8e$export$a7ee192b982af9c1 = $97e88d80960d9b8e$export$c123ee06d9da8480 = void 0;
const $97e88d80960d9b8e$var$numericPatterns = $97e88d80960d9b8e$export$c123ee06d9da8480 = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
};
const $97e88d80960d9b8e$var$timezonePatterns = $97e88d80960d9b8e$export$a7ee192b982af9c1 = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};


function $f2078e3cdd12598a$var$mapValue(parseFnResult, mapFn) {
    if (!parseFnResult) return parseFnResult;
    return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest
    };
}
function $f2078e3cdd12598a$var$parseNumericPattern(pattern, dateString) {
    const matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length)
    };
}
function $f2078e3cdd12598a$var$parseTimezonePattern(pattern, dateString) {
    const matchResult = dateString.match(pattern);
    if (!matchResult) return null;
    // Input is 'Z'
    if (matchResult[0] === "Z") return {
        value: 0,
        rest: dateString.slice(1)
    };
    const sign = matchResult[1] === "+" ? 1 : -1;
    const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * $14ce387571ca9ade$export$7f72910d6dfd237a + minutes * $14ce387571ca9ade$export$91246f0b9bd9beff + seconds * $14ce387571ca9ade$export$397c2d5776aa9055),
        rest: dateString.slice(matchResult[0].length)
    };
}
function $f2078e3cdd12598a$var$parseAnyDigitsSigned(dateString) {
    return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.anyDigitsSigned, dateString);
}
function $f2078e3cdd12598a$var$parseNDigits(n, dateString) {
    switch(n){
        case 1:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.singleDigit, dateString);
        case 2:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.twoDigits, dateString);
        case 3:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.threeDigits, dateString);
        case 4:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.fourDigits, dateString);
        default:
            return $f2078e3cdd12598a$var$parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
    }
}
function $f2078e3cdd12598a$var$parseNDigitsSigned(n, dateString) {
    switch(n){
        case 1:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.singleDigitSigned, dateString);
        case 2:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.twoDigitsSigned, dateString);
        case 3:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.threeDigitsSigned, dateString);
        case 4:
            return $f2078e3cdd12598a$var$parseNumericPattern($97e88d80960d9b8e$export$c123ee06d9da8480.fourDigitsSigned, dateString);
        default:
            return $f2078e3cdd12598a$var$parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
    }
}
function $f2078e3cdd12598a$var$dayPeriodEnumToHours(dayPeriod) {
    switch(dayPeriod){
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function $f2078e3cdd12598a$var$normalizeTwoDigitYear(twoDigitYear, currentYear) {
    const isCommonEra = currentYear > 0;
    // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    let result;
    if (absCurrentYear <= 50) result = twoDigitYear || 100;
    else {
        const rangeEnd = absCurrentYear + 50;
        const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
        const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
function $f2078e3cdd12598a$var$isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}


// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class $e7bdcad7cf29c2ca$var$YearParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 130;
    incompatibleTokens = [
        "Y",
        "R",
        "u",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
    parse(dateString, token, match) {
        const valueCallback = (year)=>({
                year: year,
                isTwoDigitYear: token === "yy"
            });
        switch(token){
            case "y":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(4, dateString), valueCallback);
            case "yo":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.ordinalNumber(dateString, {
                    unit: "year"
                }), valueCallback);
            default:
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString), valueCallback);
        }
    }
    validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
    }
    set(date, flags, value) {
        const currentYear = date.getFullYear();
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = (0, $f2078e3cdd12598a$export$29126f735cbf69f7)(value.year, currentYear);
            date.setFullYear(normalizedTwoDigitYear, 0, 1);
            date.setHours(0, 0, 0, 0);
            return date;
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
$e7bdcad7cf29c2ca$export$48d352de7cd4a988 = $e7bdcad7cf29c2ca$var$YearParser;


var $bc842c00d0c60909$export$b8ef38dfcf05d5db;
"use strict";
$bc842c00d0c60909$export$b8ef38dfcf05d5db = void 0;




// Local week-numbering year
class $bc842c00d0c60909$var$LocalWeekYearParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 130;
    parse(dateString, token, match) {
        const valueCallback = (year)=>({
                year: year,
                isTwoDigitYear: token === "YY"
            });
        switch(token){
            case "Y":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(4, dateString), valueCallback);
            case "Yo":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.ordinalNumber(dateString, {
                    unit: "year"
                }), valueCallback);
            default:
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString), valueCallback);
        }
    }
    validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
    }
    set(date, flags, value, options) {
        const currentYear = (0, $775230ee08a3e430$export$12d572480ceb6e58)(date, options);
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = (0, $f2078e3cdd12598a$export$29126f735cbf69f7)(value.year, currentYear);
            date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
            date.setHours(0, 0, 0, 0);
            return (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(date, options);
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, options.firstWeekContainsDate);
        date.setHours(0, 0, 0, 0);
        return (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(date, options);
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T"
    ];
}
$bc842c00d0c60909$export$b8ef38dfcf05d5db = $bc842c00d0c60909$var$LocalWeekYearParser;


var $dda5f5d3b970b5b3$export$951d1df011fde06f;
"use strict";
$dda5f5d3b970b5b3$export$951d1df011fde06f = void 0;




// ISO week-numbering year
class $dda5f5d3b970b5b3$var$ISOWeekYearParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 130;
    parse(dateString, token) {
        if (token === "R") return (0, $f2078e3cdd12598a$export$2c9307b2e29c533c)(4, dateString);
        return (0, $f2078e3cdd12598a$export$2c9307b2e29c533c)(token.length, dateString);
    }
    set(date, _flags, value) {
        const firstWeekOfYear = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
        firstWeekOfYear.setFullYear(value, 0, 4);
        firstWeekOfYear.setHours(0, 0, 0, 0);
        return (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(firstWeekOfYear);
    }
    incompatibleTokens = [
        "G",
        "y",
        "Y",
        "u",
        "Q",
        "q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T"
    ];
}
$dda5f5d3b970b5b3$export$951d1df011fde06f = $dda5f5d3b970b5b3$var$ISOWeekYearParser;


var $595973be038da50e$export$bad9d2ea38e8f1a;
"use strict";
$595973be038da50e$export$bad9d2ea38e8f1a = void 0;


class $595973be038da50e$var$ExtendedYearParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 130;
    parse(dateString, token) {
        if (token === "u") return (0, $f2078e3cdd12598a$export$2c9307b2e29c533c)(4, dateString);
        return (0, $f2078e3cdd12598a$export$2c9307b2e29c533c)(token.length, dateString);
    }
    set(date, _flags, value) {
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "G",
        "y",
        "Y",
        "R",
        "w",
        "I",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$595973be038da50e$export$bad9d2ea38e8f1a = $595973be038da50e$var$ExtendedYearParser;


var $e9d857886cc4f036$export$5cb0f701186dde1d;
"use strict";
$e9d857886cc4f036$export$5cb0f701186dde1d = void 0;


class $e9d857886cc4f036$var$QuarterParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 120;
    parse(dateString, token, match) {
        switch(token){
            // 1, 2, 3, 4
            case "Q":
            case "QQ":
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return match.ordinalNumber(dateString, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return match.quarter(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return match.quarter(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.quarter(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 4;
    }
    set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$e9d857886cc4f036$export$5cb0f701186dde1d = $e9d857886cc4f036$var$QuarterParser;


var $6d3a51cf68e00381$export$300c0c2990e20e6d;
"use strict";
$6d3a51cf68e00381$export$300c0c2990e20e6d = void 0;


class $6d3a51cf68e00381$var$StandAloneQuarterParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 120;
    parse(dateString, token, match) {
        switch(token){
            // 1, 2, 3, 4
            case "q":
            case "qq":
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return match.ordinalNumber(dateString, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return match.quarter(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return match.quarter(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return match.quarter(dateString, {
                    width: "wide",
                    context: "standalone"
                }) || match.quarter(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.quarter(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 4;
    }
    set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$6d3a51cf68e00381$export$300c0c2990e20e6d = $6d3a51cf68e00381$var$StandAloneQuarterParser;


var $baed8d2d1cfbd14e$export$400dd8b40ef138a3;
"use strict";
$baed8d2d1cfbd14e$export$400dd8b40ef138a3 = void 0;



class $baed8d2d1cfbd14e$var$MonthParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "L",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
    priority = 110;
    parse(dateString, token, match) {
        const valueCallback = (value)=>value - 1;
        switch(token){
            // 1, 2, ..., 12
            case "M":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.month, dateString), valueCallback);
            // 01, 02, ..., 12
            case "MM":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.ordinalNumber(dateString, {
                    unit: "month"
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case "MMM":
                return match.month(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return match.month(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return match.month(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.month(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
$baed8d2d1cfbd14e$export$400dd8b40ef138a3 = $baed8d2d1cfbd14e$var$MonthParser;


var $c8ef27b267737069$export$1d7eaa53eaa5deba;
"use strict";
$c8ef27b267737069$export$1d7eaa53eaa5deba = void 0;



class $c8ef27b267737069$var$StandAloneMonthParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 110;
    parse(dateString, token, match) {
        const valueCallback = (value)=>value - 1;
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.month, dateString), valueCallback);
            // 01, 02, ..., 12
            case "LL":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.ordinalNumber(dateString, {
                    unit: "month"
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case "LLL":
                return match.month(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return match.month(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return match.month(dateString, {
                    width: "wide",
                    context: "standalone"
                }) || match.month(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.month(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$c8ef27b267737069$export$1d7eaa53eaa5deba = $c8ef27b267737069$var$StandAloneMonthParser;


var $ef1ccca1ce3151a7$export$c4005ffc174e07c0;
"use strict";
$ef1ccca1ce3151a7$export$c4005ffc174e07c0 = void 0;
var $3ec7f33bd38f385f$exports = {};

$parcel$export($3ec7f33bd38f385f$exports, "setWeek", () => $3ec7f33bd38f385f$export$4b3066ce4afafd88, (v) => $3ec7f33bd38f385f$export$4b3066ce4afafd88 = v);
var $3ec7f33bd38f385f$export$4b3066ce4afafd88;
"use strict";
$3ec7f33bd38f385f$export$4b3066ce4afafd88 = $3ec7f33bd38f385f$var$setWeek;


/**
 * The {@link setWeek} function options.
 */ /**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */ function $3ec7f33bd38f385f$var$setWeek(date, week, options) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = (0, $518ac188edcd4918$export$efe19b760242b2fc)(_date, options) - week;
    _date.setDate(_date.getDate() - diff * 7);
    return _date;
}






// Local week of year
class $ef1ccca1ce3151a7$var$LocalWeekParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 100;
    parse(dateString, token, match) {
        switch(token){
            case "w":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.week, dateString);
            case "wo":
                return match.ordinalNumber(dateString, {
                    unit: "week"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value, options) {
        return (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)((0, $3ec7f33bd38f385f$export$4b3066ce4afafd88)(date, value, options), options);
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T"
    ];
}
$ef1ccca1ce3151a7$export$c4005ffc174e07c0 = $ef1ccca1ce3151a7$var$LocalWeekParser;


var $69a1c870f03e1846$export$6fc8dbedd560a6af;
"use strict";
$69a1c870f03e1846$export$6fc8dbedd560a6af = void 0;
var $eedf8e4ff0786614$exports = {};

$parcel$export($eedf8e4ff0786614$exports, "setISOWeek", () => $eedf8e4ff0786614$export$6542bebf6be94082, (v) => $eedf8e4ff0786614$export$6542bebf6be94082 = v);
var $eedf8e4ff0786614$export$6542bebf6be94082;
"use strict";
$eedf8e4ff0786614$export$6542bebf6be94082 = $eedf8e4ff0786614$var$setISOWeek;


/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */ function $eedf8e4ff0786614$var$setISOWeek(date, week) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = (0, $318ab28058dd7297$export$7cabdc5698b63e2f)(_date) - week;
    _date.setDate(_date.getDate() - diff * 7);
    return _date;
}






// ISO week of year
class $69a1c870f03e1846$var$ISOWeekParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 100;
    parse(dateString, token, match) {
        switch(token){
            case "I":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.week, dateString);
            case "Io":
                return match.ordinalNumber(dateString, {
                    unit: "week"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value) {
        return (0, $a0788919f0f9c7eb$export$6173213f95a4431e)((0, $eedf8e4ff0786614$export$6542bebf6be94082)(date, value));
    }
    incompatibleTokens = [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "e",
        "c",
        "t",
        "T"
    ];
}
$69a1c870f03e1846$export$6fc8dbedd560a6af = $69a1c870f03e1846$var$ISOWeekParser;


var $8146c9fb2e9af0df$export$e8d4b28a20981dd2;
"use strict";
$8146c9fb2e9af0df$export$e8d4b28a20981dd2 = void 0;



const $8146c9fb2e9af0df$var$DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
const $8146c9fb2e9af0df$var$DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
// Day of the month
class $8146c9fb2e9af0df$var$DateParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 90;
    subPriority = 1;
    parse(dateString, token, match) {
        switch(token){
            case "d":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.date, dateString);
            case "do":
                return match.ordinalNumber(dateString, {
                    unit: "date"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, $f2078e3cdd12598a$export$3d50627710b84d75)(year);
        const month = date.getMonth();
        if (isLeapYear) return value >= 1 && value <= $8146c9fb2e9af0df$var$DAYS_IN_MONTH_LEAP_YEAR[month];
        else return value >= 1 && value <= $8146c9fb2e9af0df$var$DAYS_IN_MONTH[month];
    }
    set(date, _flags, value) {
        date.setDate(value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "w",
        "I",
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$8146c9fb2e9af0df$export$e8d4b28a20981dd2 = $8146c9fb2e9af0df$var$DateParser;


var $1c91ed3df00b112d$export$6cfe0d613455f615;
"use strict";
$1c91ed3df00b112d$export$6cfe0d613455f615 = void 0;



class $1c91ed3df00b112d$var$DayOfYearParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 90;
    subpriority = 1;
    parse(dateString, token, match) {
        switch(token){
            case "D":
            case "DD":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.dayOfYear, dateString);
            case "Do":
                return match.ordinalNumber(dateString, {
                    unit: "date"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, $f2078e3cdd12598a$export$3d50627710b84d75)(year);
        if (isLeapYear) return value >= 1 && value <= 366;
        else return value >= 1 && value <= 365;
    }
    set(date, _flags, value) {
        date.setMonth(0, value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "Y",
        "R",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "I",
        "d",
        "E",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$1c91ed3df00b112d$export$6cfe0d613455f615 = $1c91ed3df00b112d$var$DayOfYearParser;


var $a2a68d2fb0c26781$export$1b03c8b76262f7bd;
"use strict";
$a2a68d2fb0c26781$export$1b03c8b76262f7bd = void 0;
var $97a42d59cb3d4a33$exports = {};

$parcel$export($97a42d59cb3d4a33$exports, "setDay", () => $97a42d59cb3d4a33$export$b04fdcda82decc6c, (v) => $97a42d59cb3d4a33$export$b04fdcda82decc6c = v);
var $97a42d59cb3d4a33$export$b04fdcda82decc6c;
"use strict";
$97a42d59cb3d4a33$export$b04fdcda82decc6c = $97a42d59cb3d4a33$var$setDay;



/**
 * The {@link setDay} function options.
 */ /**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */ function $97a42d59cb3d4a33$var$setDay(date, day, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const currentDay = _date.getDay();
    const remainder = day % 7;
    const dayIndex = (remainder + 7) % 7;
    const delta = 7 - weekStartsOn;
    const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
    return (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(_date, diff);
}



// Day of week
class $a2a68d2fb0c26781$var$DayParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 90;
    parse(dateString, token, match) {
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return match.day(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, $97a42d59cb3d4a33$export$b04fdcda82decc6c)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "D",
        "i",
        "e",
        "c",
        "t",
        "T"
    ];
}
$a2a68d2fb0c26781$export$1b03c8b76262f7bd = $a2a68d2fb0c26781$var$DayParser;


var $1bc5c65db5f5af46$export$44d1c127ab42c480;
"use strict";
$1bc5c65db5f5af46$export$44d1c127ab42c480 = void 0;



// Local day of week
class $1bc5c65db5f5af46$var$LocalDayParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 90;
    parse(dateString, token, match, options) {
        const valueCallback = (value)=>{
            // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
            const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };
        switch(token){
            // 3
            case "e":
            case "ee":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString), valueCallback);
            // 3rd
            case "eo":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.ordinalNumber(dateString, {
                    unit: "day"
                }), valueCallback);
            // Tue
            case "eee":
                return match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return match.day(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, $97a42d59cb3d4a33$export$b04fdcda82decc6c)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "c",
        "t",
        "T"
    ];
}
$1bc5c65db5f5af46$export$44d1c127ab42c480 = $1bc5c65db5f5af46$var$LocalDayParser;


var $83bd441e540d6877$export$e447a647caaaec1d;
"use strict";
$83bd441e540d6877$export$e447a647caaaec1d = void 0;



// Stand-alone local day of week
class $83bd441e540d6877$var$StandAloneLocalDayParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 90;
    parse(dateString, token, match, options) {
        const valueCallback = (value)=>{
            // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
            const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };
        switch(token){
            // 3
            case "c":
            case "cc":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString), valueCallback);
            // 3rd
            case "co":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.ordinalNumber(dateString, {
                    unit: "day"
                }), valueCallback);
            // Tue
            case "ccc":
                return match.day(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "short",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return match.day(dateString, {
                    width: "short",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return match.day(dateString, {
                    width: "wide",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "short",
                    context: "standalone"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "standalone"
                });
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, $97a42d59cb3d4a33$export$b04fdcda82decc6c)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "E",
        "i",
        "e",
        "t",
        "T"
    ];
}
$83bd441e540d6877$export$e447a647caaaec1d = $83bd441e540d6877$var$StandAloneLocalDayParser;


var $5117b628c758e4f6$export$693fb1e525095b2a;
"use strict";
$5117b628c758e4f6$export$693fb1e525095b2a = void 0;
var $7e19aac5a454908c$exports = {};

$parcel$export($7e19aac5a454908c$exports, "setISODay", () => $7e19aac5a454908c$export$1fd9df65adb0d1aa, (v) => $7e19aac5a454908c$export$1fd9df65adb0d1aa = v);
var $7e19aac5a454908c$export$1fd9df65adb0d1aa;
"use strict";
$7e19aac5a454908c$export$1fd9df65adb0d1aa = $7e19aac5a454908c$var$setISODay;



/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */ function $7e19aac5a454908c$var$setISODay(date, day) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const currentDay = (0, $6d8f62449eb8873e$export$c514f4c1a8ed5e9e)(_date);
    const diff = day - currentDay;
    return (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(_date, diff);
}




// ISO day of week
class $5117b628c758e4f6$var$ISODayParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 90;
    parse(dateString, token, match) {
        const valueCallback = (value)=>{
            if (value === 0) return 7;
            return value;
        };
        switch(token){
            // 2
            case "i":
            case "ii":
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
            // 2nd
            case "io":
                return match.ordinalNumber(dateString, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
            // T
            case "iiiii":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
            // Tu
            case "iiiiii":
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
            // Tuesday
            case "iiii":
            default:
                return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)(match.day(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "short",
                    context: "formatting"
                }) || match.day(dateString, {
                    width: "narrow",
                    context: "formatting"
                }), valueCallback);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 7;
    }
    set(date, _flags, value) {
        date = (0, $7e19aac5a454908c$export$1fd9df65adb0d1aa)(date, value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "y",
        "Y",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "w",
        "d",
        "D",
        "E",
        "e",
        "c",
        "t",
        "T"
    ];
}
$5117b628c758e4f6$export$693fb1e525095b2a = $5117b628c758e4f6$var$ISODayParser;


var $13391e5c286b30e5$export$8d1e08492351df91;
"use strict";
$13391e5c286b30e5$export$8d1e08492351df91 = void 0;


class $13391e5c286b30e5$var$AMPMParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 80;
    parse(dateString, token, match) {
        switch(token){
            case "a":
            case "aa":
            case "aaa":
                return match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaaa":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    set(date, _flags, value) {
        date.setHours((0, $f2078e3cdd12598a$export$fb506d2676e7f207)(value), 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "b",
        "B",
        "H",
        "k",
        "t",
        "T"
    ];
}
$13391e5c286b30e5$export$8d1e08492351df91 = $13391e5c286b30e5$var$AMPMParser;


var $8d14893dd054cd29$export$73ca2bd0a17d273;
"use strict";
$8d14893dd054cd29$export$73ca2bd0a17d273 = void 0;


class $8d14893dd054cd29$var$AMPMMidnightParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 80;
    parse(dateString, token, match) {
        switch(token){
            case "b":
            case "bb":
            case "bbb":
                return match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbbb":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    set(date, _flags, value) {
        date.setHours((0, $f2078e3cdd12598a$export$fb506d2676e7f207)(value), 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "B",
        "H",
        "k",
        "t",
        "T"
    ];
}
$8d14893dd054cd29$export$73ca2bd0a17d273 = $8d14893dd054cd29$var$AMPMMidnightParser;


var $315ba8d30da15c86$export$bb9212adf05373db;
"use strict";
$315ba8d30da15c86$export$bb9212adf05373db = void 0;


// in the morning, in the afternoon, in the evening, at night
class $315ba8d30da15c86$var$DayPeriodParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 80;
    parse(dateString, token, match) {
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBBB":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting"
                }) || match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting"
                });
        }
    }
    set(date, _flags, value) {
        date.setHours((0, $f2078e3cdd12598a$export$fb506d2676e7f207)(value), 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "b",
        "t",
        "T"
    ];
}
$315ba8d30da15c86$export$bb9212adf05373db = $315ba8d30da15c86$var$DayPeriodParser;


var $38240d3639c20381$export$8a04050a727a1756;
"use strict";
$38240d3639c20381$export$8a04050a727a1756 = void 0;



class $38240d3639c20381$var$Hour1to12Parser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "h":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.hour12h, dateString);
            case "ho":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 12;
    }
    set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
        else if (!isPM && value === 12) date.setHours(0, 0, 0, 0);
        else date.setHours(value, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "H",
        "K",
        "k",
        "t",
        "T"
    ];
}
$38240d3639c20381$export$8a04050a727a1756 = $38240d3639c20381$var$Hour1to12Parser;


var $d498e9f8d7c35905$export$e56f4dea2c3e56dd;
"use strict";
$d498e9f8d7c35905$export$e56f4dea2c3e56dd = void 0;



class $d498e9f8d7c35905$var$Hour0to23Parser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "H":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.hour23h, dateString);
            case "Ho":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 23;
    }
    set(date, _flags, value) {
        date.setHours(value, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "b",
        "h",
        "K",
        "k",
        "t",
        "T"
    ];
}
$d498e9f8d7c35905$export$e56f4dea2c3e56dd = $d498e9f8d7c35905$var$Hour0to23Parser;


var $4624bab2c293bfea$export$cbbe855312f87d77;
"use strict";
$4624bab2c293bfea$export$cbbe855312f87d77 = void 0;



class $4624bab2c293bfea$var$Hour0To11Parser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "K":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.hour11h, dateString);
            case "Ko":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) date.setHours(value + 12, 0, 0, 0);
        else date.setHours(value, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "h",
        "H",
        "k",
        "t",
        "T"
    ];
}
$4624bab2c293bfea$export$cbbe855312f87d77 = $4624bab2c293bfea$var$Hour0To11Parser;


var $eb79bf5627788e0b$export$6008046d2b34b6a5;
"use strict";
$eb79bf5627788e0b$export$6008046d2b34b6a5 = void 0;



class $eb79bf5627788e0b$var$Hour1To24Parser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 70;
    parse(dateString, token, match) {
        switch(token){
            case "k":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.hour24h, dateString);
            case "ko":
                return match.ordinalNumber(dateString, {
                    unit: "hour"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 24;
    }
    set(date, _flags, value) {
        const hours = value <= 24 ? value % 24 : value;
        date.setHours(hours, 0, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "a",
        "b",
        "h",
        "H",
        "K",
        "t",
        "T"
    ];
}
$eb79bf5627788e0b$export$6008046d2b34b6a5 = $eb79bf5627788e0b$var$Hour1To24Parser;


var $ac3c6f3db6710d2b$export$2b52670d9e2be53;
"use strict";
$ac3c6f3db6710d2b$export$2b52670d9e2be53 = void 0;



class $ac3c6f3db6710d2b$var$MinuteParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 60;
    parse(dateString, token, match) {
        switch(token){
            case "m":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.minute, dateString);
            case "mo":
                return match.ordinalNumber(dateString, {
                    unit: "minute"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setMinutes(value, 0, 0);
        return date;
    }
    incompatibleTokens = [
        "t",
        "T"
    ];
}
$ac3c6f3db6710d2b$export$2b52670d9e2be53 = $ac3c6f3db6710d2b$var$MinuteParser;


var $2a4b66d3b323bcc2$export$94d46d540cf1366a;
"use strict";
$2a4b66d3b323bcc2$export$94d46d540cf1366a = void 0;



class $2a4b66d3b323bcc2$var$SecondParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 50;
    parse(dateString, token, match) {
        switch(token){
            case "s":
                return (0, $f2078e3cdd12598a$export$cc7cc9e2a3ff9388)($97e88d80960d9b8e$export$c123ee06d9da8480.second, dateString);
            case "so":
                return match.ordinalNumber(dateString, {
                    unit: "second"
                });
            default:
                return (0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setSeconds(value, 0);
        return date;
    }
    incompatibleTokens = [
        "t",
        "T"
    ];
}
$2a4b66d3b323bcc2$export$94d46d540cf1366a = $2a4b66d3b323bcc2$var$SecondParser;


var $ebdaa9633920fe2f$export$b8e6f8b2d70893b1;
"use strict";
$ebdaa9633920fe2f$export$b8e6f8b2d70893b1 = void 0;


class $ebdaa9633920fe2f$var$FractionOfSecondParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 30;
    parse(dateString, token) {
        const valueCallback = (value)=>Math.trunc(value * Math.pow(10, -token.length + 3));
        return (0, $f2078e3cdd12598a$export$4f84e3a82c7b538)((0, $f2078e3cdd12598a$export$513bb01536146ab6)(token.length, dateString), valueCallback);
    }
    set(date, _flags, value) {
        date.setMilliseconds(value);
        return date;
    }
    incompatibleTokens = [
        "t",
        "T"
    ];
}
$ebdaa9633920fe2f$export$b8e6f8b2d70893b1 = $ebdaa9633920fe2f$var$FractionOfSecondParser;


var $d45158746e27ad67$export$104d901d49fea29b;
"use strict";
$d45158746e27ad67$export$104d901d49fea29b = void 0;





// Timezone (ISO-8601. +00:00 is `'Z'`)
class $d45158746e27ad67$var$ISOTimezoneWithZParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 10;
    parse(dateString, token) {
        switch(token){
            case "X":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.basicOptionalMinutes, dateString);
            case "XX":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.basic, dateString);
            case "XXXX":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.basicOptionalSeconds, dateString);
            case "XXXXX":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.extendedOptionalSeconds, dateString);
            case "XXX":
            default:
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.extended, dateString);
        }
    }
    set(date, flags, value) {
        if (flags.timestampIsSet) return date;
        return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, date.getTime() - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(date) - value);
    }
    incompatibleTokens = [
        "t",
        "T",
        "x"
    ];
}
$d45158746e27ad67$export$104d901d49fea29b = $d45158746e27ad67$var$ISOTimezoneWithZParser;


var $aff4c918637bb753$export$12910e5204b52b9;
"use strict";
$aff4c918637bb753$export$12910e5204b52b9 = void 0;





// Timezone (ISO-8601)
class $aff4c918637bb753$var$ISOTimezoneParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 10;
    parse(dateString, token) {
        switch(token){
            case "x":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.basicOptionalMinutes, dateString);
            case "xx":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.basic, dateString);
            case "xxxx":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.basicOptionalSeconds, dateString);
            case "xxxxx":
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.extendedOptionalSeconds, dateString);
            case "xxx":
            default:
                return (0, $f2078e3cdd12598a$export$6497f4c0ecdfba8e)($97e88d80960d9b8e$export$a7ee192b982af9c1.extended, dateString);
        }
    }
    set(date, flags, value) {
        if (flags.timestampIsSet) return date;
        return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, date.getTime() - (0, $30ec17c6531dc4b7$export$113002b5eff6e430)(date) - value);
    }
    incompatibleTokens = [
        "t",
        "T",
        "X"
    ];
}
$aff4c918637bb753$export$12910e5204b52b9 = $aff4c918637bb753$var$ISOTimezoneParser;


var $564d8dd563162268$export$2cd8bf877a05e96;
"use strict";
$564d8dd563162268$export$2cd8bf877a05e96 = void 0;



class $564d8dd563162268$var$TimestampSecondsParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 40;
    parse(dateString) {
        return (0, $f2078e3cdd12598a$export$d931c43c4608a164)(dateString);
    }
    set(date, _flags, value) {
        return [
            (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, value * 1000),
            {
                timestampIsSet: true
            }
        ];
    }
    incompatibleTokens = "*";
}
$564d8dd563162268$export$2cd8bf877a05e96 = $564d8dd563162268$var$TimestampSecondsParser;


var $308c940ea6e9e815$export$6d8f69c6906d6368;
"use strict";
$308c940ea6e9e815$export$6d8f69c6906d6368 = void 0;



class $308c940ea6e9e815$var$TimestampMillisecondsParser extends $2b526269ec61b6da$export$7acfa6ed01010e37 {
    priority = 20;
    parse(dateString) {
        return (0, $f2078e3cdd12598a$export$d931c43c4608a164)(dateString);
    }
    set(date, _flags, value) {
        return [
            (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, value),
            {
                timestampIsSet: true
            }
        ];
    }
    incompatibleTokens = "*";
}
$308c940ea6e9e815$export$6d8f69c6906d6368 = $308c940ea6e9e815$var$TimestampMillisecondsParser;


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok, we want any here
const $9cf7572a4ef296c6$var$parsers = $9cf7572a4ef296c6$export$19131010e7fd8373 = {
    G: new $e6299db4447145cc$export$8e5a1d3f85a9688(),
    y: new $e7bdcad7cf29c2ca$export$48d352de7cd4a988(),
    Y: new $bc842c00d0c60909$export$b8ef38dfcf05d5db(),
    R: new $dda5f5d3b970b5b3$export$951d1df011fde06f(),
    u: new $595973be038da50e$export$bad9d2ea38e8f1a(),
    Q: new $e9d857886cc4f036$export$5cb0f701186dde1d(),
    q: new $6d3a51cf68e00381$export$300c0c2990e20e6d(),
    M: new $baed8d2d1cfbd14e$export$400dd8b40ef138a3(),
    L: new $c8ef27b267737069$export$1d7eaa53eaa5deba(),
    w: new $ef1ccca1ce3151a7$export$c4005ffc174e07c0(),
    I: new $69a1c870f03e1846$export$6fc8dbedd560a6af(),
    d: new $8146c9fb2e9af0df$export$e8d4b28a20981dd2(),
    D: new $1c91ed3df00b112d$export$6cfe0d613455f615(),
    E: new $a2a68d2fb0c26781$export$1b03c8b76262f7bd(),
    e: new $1bc5c65db5f5af46$export$44d1c127ab42c480(),
    c: new $83bd441e540d6877$export$e447a647caaaec1d(),
    i: new $5117b628c758e4f6$export$693fb1e525095b2a(),
    a: new $13391e5c286b30e5$export$8d1e08492351df91(),
    b: new $8d14893dd054cd29$export$73ca2bd0a17d273(),
    B: new $315ba8d30da15c86$export$bb9212adf05373db(),
    h: new $38240d3639c20381$export$8a04050a727a1756(),
    H: new $d498e9f8d7c35905$export$e56f4dea2c3e56dd(),
    K: new $4624bab2c293bfea$export$cbbe855312f87d77(),
    k: new $eb79bf5627788e0b$export$6008046d2b34b6a5(),
    m: new $ac3c6f3db6710d2b$export$2b52670d9e2be53(),
    s: new $2a4b66d3b323bcc2$export$94d46d540cf1366a(),
    S: new $ebdaa9633920fe2f$export$b8e6f8b2d70893b1(),
    X: new $d45158746e27ad67$export$104d901d49fea29b(),
    x: new $aff4c918637bb753$export$12910e5204b52b9(),
    t: new $564d8dd563162268$export$2cd8bf877a05e96(),
    T: new $308c940ea6e9e815$export$6d8f69c6906d6368()
};



// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
/**
 * The {@link parse} function options.
 */ // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const $ac47ffb99f1190cb$var$formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const $ac47ffb99f1190cb$var$longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const $ac47ffb99f1190cb$var$escapedStringRegExp = /^'([^]*?)'?$/;
const $ac47ffb99f1190cb$var$doubleQuoteRegExp = /''/g;
const $ac47ffb99f1190cb$var$notWhitespaceRegExp = /\S/;
const $ac47ffb99f1190cb$var$unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */ function $ac47ffb99f1190cb$var$parse(dateStr, formatStr, referenceDate, options) {
    const defaultOptions = (0, $4127fd6b0fb80006$export$430a3269e24b912e)();
    const locale = options?.locale ?? defaultOptions.locale ?? $0bf869c88d95e2b3$exports.defaultLocale;
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    if (formatStr === "") {
        if (dateStr === "") return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(referenceDate);
        else return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, NaN);
    }
    const subFnOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale
    };
    // If timezone isn't specified, it will be set to the system timezone
    const setters = [
        new $336cfd90b67726d5$export$5aaf7ff7f09ea4ee()
    ];
    const tokens = formatStr.match($ac47ffb99f1190cb$var$longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter in $db44f4637d14c69e$export$70cc8fd02856fd58) {
            const longFormatter = $db44f4637d14c69e$export$70cc8fd02856fd58[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match($ac47ffb99f1190cb$var$formattingTokensRegExp);
    const usedTokens = [];
    for (let token of tokens){
        if (!options?.useAdditionalWeekYearTokens && (0, $cb29d1fc2049db35$export$c6b49d6dceb604a1)(token)) (0, $cb29d1fc2049db35$export$f5f38f90ecaaf879)(token, formatStr, dateStr);
        if (!options?.useAdditionalDayOfYearTokens && (0, $cb29d1fc2049db35$export$c6cc36aa33304772)(token)) (0, $cb29d1fc2049db35$export$f5f38f90ecaaf879)(token, formatStr, dateStr);
        const firstCharacter = token[0];
        const parser = $9cf7572a4ef296c6$export$19131010e7fd8373[firstCharacter];
        if (parser) {
            const { incompatibleTokens: incompatibleTokens } = parser;
            if (Array.isArray(incompatibleTokens)) {
                const incompatibleToken = usedTokens.find((usedToken)=>incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter);
                if (incompatibleToken) throw new RangeError(`The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`);
            } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) throw new RangeError(`The format string mustn't contain \`${token}\` and any other token at the same time`);
            usedTokens.push({
                token: firstCharacter,
                fullToken: token
            });
            const parseResult = parser.run(dateStr, token, locale.match, subFnOptions);
            if (!parseResult) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, NaN);
            setters.push(parseResult.setter);
            dateStr = parseResult.rest;
        } else {
            if (firstCharacter.match($ac47ffb99f1190cb$var$unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
            // Replace two single quote characters with one single quote character
            if (token === "''") token = "'";
            else if (firstCharacter === "'") token = $ac47ffb99f1190cb$var$cleanEscapedString(token);
            // Cut token from string, or, if string doesn't match the token, return Invalid Date
            if (dateStr.indexOf(token) === 0) dateStr = dateStr.slice(token.length);
            else return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, NaN);
        }
    }
    // Check if the remaining input contains something other than whitespace
    if (dateStr.length > 0 && $ac47ffb99f1190cb$var$notWhitespaceRegExp.test(dateStr)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, NaN);
    const uniquePrioritySetters = setters.map((setter)=>setter.priority).sort((a, b)=>b - a).filter((priority, index, array)=>array.indexOf(priority) === index).map((priority)=>setters.filter((setter)=>setter.priority === priority).sort((a, b)=>b.subPriority - a.subPriority)).map((setterArray)=>setterArray[0]);
    let date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(referenceDate);
    if (isNaN(date.getTime())) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, NaN);
    const flags = {};
    for (const setter of uniquePrioritySetters){
        if (!setter.validate(date, subFnOptions)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, NaN);
        const result = setter.set(date, flags, subFnOptions);
        // Result is tuple (date, flags)
        if (Array.isArray(result)) {
            date = result[0];
            Object.assign(flags, result[1]);
        // Result is date
        } else date = result;
    }
    return (0, $8079cc2f427f92af$export$ead8a1812b171991)(referenceDate, date);
}
function $ac47ffb99f1190cb$var$cleanEscapedString(input) {
    return input.match($ac47ffb99f1190cb$var$escapedStringRegExp)[1].replace($ac47ffb99f1190cb$var$doubleQuoteRegExp, "'");
}


/**
 * The {@link isMatch} function options.
 */ /**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateStr - The date string to verify
 * @param format - The string of tokens
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns Is format string a match for date string?
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * const result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * const result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */ function $75cfc96735397c99$var$isMatch(dateStr, formatStr, options) {
    return (0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)((0, $ac47ffb99f1190cb$exports.parse)(dateStr, formatStr, new Date(), options));
}


Object.keys($75cfc96735397c99$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $75cfc96735397c99$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $75cfc96735397c99$exports[key];
        }
    });
});
var $f780f604565fdae3$exports = {};

$parcel$export($f780f604565fdae3$exports, "isMonday", () => $f780f604565fdae3$export$9573fe9b7c9ac3f5, (v) => $f780f604565fdae3$export$9573fe9b7c9ac3f5 = v);
var $f780f604565fdae3$export$9573fe9b7c9ac3f5;
"use strict";
$f780f604565fdae3$export$9573fe9b7c9ac3f5 = $f780f604565fdae3$var$isMonday;

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */ function $f780f604565fdae3$var$isMonday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 1;
}


Object.keys($f780f604565fdae3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f780f604565fdae3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f780f604565fdae3$exports[key];
        }
    });
});
var $61f5c70ee9fab217$exports = {};

$parcel$export($61f5c70ee9fab217$exports, "isPast", () => $61f5c70ee9fab217$export$fc5014aa3db48558, (v) => $61f5c70ee9fab217$export$fc5014aa3db48558 = v);
var $61f5c70ee9fab217$export$fc5014aa3db48558;
"use strict";
$61f5c70ee9fab217$export$fc5014aa3db48558 = $61f5c70ee9fab217$var$isPast;

/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */ function $61f5c70ee9fab217$var$isPast(date) {
    return +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date) < Date.now();
}


Object.keys($61f5c70ee9fab217$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $61f5c70ee9fab217$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $61f5c70ee9fab217$exports[key];
        }
    });
});

Object.keys($0b5a89a8d61cafc4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0b5a89a8d61cafc4$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0b5a89a8d61cafc4$exports[key];
        }
    });
});
var $108c42de77058b92$exports = {};

$parcel$export($108c42de77058b92$exports, "isSameHour", () => $108c42de77058b92$export$f9f3a94a0371013, (v) => $108c42de77058b92$export$f9f3a94a0371013 = v);
var $108c42de77058b92$export$f9f3a94a0371013;
"use strict";
$108c42de77058b92$export$f9f3a94a0371013 = $108c42de77058b92$var$isSameHour;
var $0b3bcfe0f0faadb3$exports = {};

$parcel$export($0b3bcfe0f0faadb3$exports, "startOfHour", () => $0b3bcfe0f0faadb3$export$24f91f68e7c9d9d5, (v) => $0b3bcfe0f0faadb3$export$24f91f68e7c9d9d5 = v);
var $0b3bcfe0f0faadb3$export$24f91f68e7c9d9d5;
"use strict";
$0b3bcfe0f0faadb3$export$24f91f68e7c9d9d5 = $0b3bcfe0f0faadb3$var$startOfHour;

/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */ function $0b3bcfe0f0faadb3$var$startOfHour(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMinutes(0, 0, 0);
    return _date;
}


/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */ function $108c42de77058b92$var$isSameHour(dateLeft, dateRight) {
    const dateLeftStartOfHour = (0, $0b3bcfe0f0faadb3$export$24f91f68e7c9d9d5)(dateLeft);
    const dateRightStartOfHour = (0, $0b3bcfe0f0faadb3$export$24f91f68e7c9d9d5)(dateRight);
    return +dateLeftStartOfHour === +dateRightStartOfHour;
}


Object.keys($108c42de77058b92$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $108c42de77058b92$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $108c42de77058b92$exports[key];
        }
    });
});
var $974ec7e085b10b6f$exports = {};

$parcel$export($974ec7e085b10b6f$exports, "isSameISOWeek", () => $974ec7e085b10b6f$export$1c6e74e3c7b27764, (v) => $974ec7e085b10b6f$export$1c6e74e3c7b27764 = v);
var $974ec7e085b10b6f$export$1c6e74e3c7b27764;
"use strict";
$974ec7e085b10b6f$export$1c6e74e3c7b27764 = $974ec7e085b10b6f$var$isSameISOWeek;
var $50f96f778309dce2$exports = {};

$parcel$export($50f96f778309dce2$exports, "isSameWeek", () => $50f96f778309dce2$export$6ea683876c36b8d2, (v) => $50f96f778309dce2$export$6ea683876c36b8d2 = v);
var $50f96f778309dce2$export$6ea683876c36b8d2;
"use strict";
$50f96f778309dce2$export$6ea683876c36b8d2 = $50f96f778309dce2$var$isSameWeek;

/**
 * The {@link isSameWeek} function options.
 */ /**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */ function $50f96f778309dce2$var$isSameWeek(dateLeft, dateRight, options) {
    const dateLeftStartOfWeek = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(dateLeft, options);
    const dateRightStartOfWeek = (0, $ece5c05ada93e803$export$42c81a444fbfb5d4)(dateRight, options);
    return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}


/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */ function $974ec7e085b10b6f$var$isSameISOWeek(dateLeft, dateRight) {
    return (0, $50f96f778309dce2$export$6ea683876c36b8d2)(dateLeft, dateRight, {
        weekStartsOn: 1
    });
}


Object.keys($974ec7e085b10b6f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $974ec7e085b10b6f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $974ec7e085b10b6f$exports[key];
        }
    });
});
var $d778086e147fc815$exports = {};

$parcel$export($d778086e147fc815$exports, "isSameISOWeekYear", () => $d778086e147fc815$export$5f55dbf38a1aee81, (v) => $d778086e147fc815$export$5f55dbf38a1aee81 = v);
var $d778086e147fc815$export$5f55dbf38a1aee81;
"use strict";
$d778086e147fc815$export$5f55dbf38a1aee81 = $d778086e147fc815$var$isSameISOWeekYear;

/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */ function $d778086e147fc815$var$isSameISOWeekYear(dateLeft, dateRight) {
    const dateLeftStartOfYear = (0, $18db251bc9893458$export$236bdfa374eb69a9)(dateLeft);
    const dateRightStartOfYear = (0, $18db251bc9893458$export$236bdfa374eb69a9)(dateRight);
    return +dateLeftStartOfYear === +dateRightStartOfYear;
}


Object.keys($d778086e147fc815$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d778086e147fc815$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d778086e147fc815$exports[key];
        }
    });
});
var $0721d44eef9fb57b$exports = {};

$parcel$export($0721d44eef9fb57b$exports, "isSameMinute", () => $0721d44eef9fb57b$export$5d274bf63c8705cb, (v) => $0721d44eef9fb57b$export$5d274bf63c8705cb = v);
var $0721d44eef9fb57b$export$5d274bf63c8705cb;
"use strict";
$0721d44eef9fb57b$export$5d274bf63c8705cb = $0721d44eef9fb57b$var$isSameMinute;

/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same minute (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */ function $0721d44eef9fb57b$var$isSameMinute(dateLeft, dateRight) {
    const dateLeftStartOfMinute = (0, $51de6ba3eb1d8195$export$c66440458c6aa793)(dateLeft);
    const dateRightStartOfMinute = (0, $51de6ba3eb1d8195$export$c66440458c6aa793)(dateRight);
    return +dateLeftStartOfMinute === +dateRightStartOfMinute;
}


Object.keys($0721d44eef9fb57b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0721d44eef9fb57b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0721d44eef9fb57b$exports[key];
        }
    });
});
var $0ac5b0727b99a689$exports = {};

$parcel$export($0ac5b0727b99a689$exports, "isSameMonth", () => $0ac5b0727b99a689$export$a18c89cbd24170ff, (v) => $0ac5b0727b99a689$export$a18c89cbd24170ff = v);
var $0ac5b0727b99a689$export$a18c89cbd24170ff;
"use strict";
$0ac5b0727b99a689$export$a18c89cbd24170ff = $0ac5b0727b99a689$var$isSameMonth;

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */ function $0ac5b0727b99a689$var$isSameMonth(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    return _dateLeft.getFullYear() === _dateRight.getFullYear() && _dateLeft.getMonth() === _dateRight.getMonth();
}


Object.keys($0ac5b0727b99a689$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0ac5b0727b99a689$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0ac5b0727b99a689$exports[key];
        }
    });
});
var $9858c65b039df55e$exports = {};

$parcel$export($9858c65b039df55e$exports, "isSameQuarter", () => $9858c65b039df55e$export$5c60e4190867161c, (v) => $9858c65b039df55e$export$5c60e4190867161c = v);
var $9858c65b039df55e$export$5c60e4190867161c;
"use strict";
$9858c65b039df55e$export$5c60e4190867161c = $9858c65b039df55e$var$isSameQuarter;

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same quarter (and year)
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */ function $9858c65b039df55e$var$isSameQuarter(dateLeft, dateRight) {
    const dateLeftStartOfQuarter = (0, $8964f19f14b70eeb$export$69be7267a042ecb3)(dateLeft);
    const dateRightStartOfQuarter = (0, $8964f19f14b70eeb$export$69be7267a042ecb3)(dateRight);
    return +dateLeftStartOfQuarter === +dateRightStartOfQuarter;
}


Object.keys($9858c65b039df55e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9858c65b039df55e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9858c65b039df55e$exports[key];
        }
    });
});
var $18ca48113ac8dc92$exports = {};

$parcel$export($18ca48113ac8dc92$exports, "isSameSecond", () => $18ca48113ac8dc92$export$b88fbcfe038f3498, (v) => $18ca48113ac8dc92$export$b88fbcfe038f3498 = v);
var $18ca48113ac8dc92$export$b88fbcfe038f3498;
"use strict";
$18ca48113ac8dc92$export$b88fbcfe038f3498 = $18ca48113ac8dc92$var$isSameSecond;
var $5dc9fbe1faec88b1$exports = {};

$parcel$export($5dc9fbe1faec88b1$exports, "startOfSecond", () => $5dc9fbe1faec88b1$export$66c51f9715fdbff5, (v) => $5dc9fbe1faec88b1$export$66c51f9715fdbff5 = v);
var $5dc9fbe1faec88b1$export$66c51f9715fdbff5;
"use strict";
$5dc9fbe1faec88b1$export$66c51f9715fdbff5 = $5dc9fbe1faec88b1$var$startOfSecond;

/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */ function $5dc9fbe1faec88b1$var$startOfSecond(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMilliseconds(0);
    return _date;
}


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second (and hour and day)?
 *
 * @description
 * Are the given dates in the same second (and hour and day)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same second (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 4 September 2014 06:01.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 4, 6, 1, 15)
 * )
 * //=> false
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 5 September 2014 06:00.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 5, 6, 0, 15)
 * )
 * //=> false
 */ function $18ca48113ac8dc92$var$isSameSecond(dateLeft, dateRight) {
    const dateLeftStartOfSecond = (0, $5dc9fbe1faec88b1$export$66c51f9715fdbff5)(dateLeft);
    const dateRightStartOfSecond = (0, $5dc9fbe1faec88b1$export$66c51f9715fdbff5)(dateRight);
    return +dateLeftStartOfSecond === +dateRightStartOfSecond;
}


Object.keys($18ca48113ac8dc92$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $18ca48113ac8dc92$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $18ca48113ac8dc92$exports[key];
        }
    });
});

Object.keys($50f96f778309dce2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $50f96f778309dce2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $50f96f778309dce2$exports[key];
        }
    });
});
var $710a73e9ad832884$exports = {};

$parcel$export($710a73e9ad832884$exports, "isSameYear", () => $710a73e9ad832884$export$5841f9eb9773f25f, (v) => $710a73e9ad832884$export$5841f9eb9773f25f = v);
var $710a73e9ad832884$export$5841f9eb9773f25f;
"use strict";
$710a73e9ad832884$export$5841f9eb9773f25f = $710a73e9ad832884$var$isSameYear;

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */ function $710a73e9ad832884$var$isSameYear(dateLeft, dateRight) {
    const _dateLeft = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateLeft);
    const _dateRight = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(dateRight);
    return _dateLeft.getFullYear() === _dateRight.getFullYear();
}


Object.keys($710a73e9ad832884$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $710a73e9ad832884$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $710a73e9ad832884$exports[key];
        }
    });
});

Object.keys($592a4b42e5b20212$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $592a4b42e5b20212$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $592a4b42e5b20212$exports[key];
        }
    });
});

Object.keys($f1ce360f186fb315$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f1ce360f186fb315$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f1ce360f186fb315$exports[key];
        }
    });
});
var $71e8fa2e1a39d068$exports = {};

$parcel$export($71e8fa2e1a39d068$exports, "isThisHour", () => $71e8fa2e1a39d068$export$5d41bdc7172839b9, (v) => $71e8fa2e1a39d068$export$5d41bdc7172839b9 = v);
var $71e8fa2e1a39d068$export$5d41bdc7172839b9;
"use strict";
$71e8fa2e1a39d068$export$5d41bdc7172839b9 = $71e8fa2e1a39d068$var$isThisHour;


/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */ function $71e8fa2e1a39d068$var$isThisHour(date) {
    return (0, $108c42de77058b92$export$f9f3a94a0371013)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($71e8fa2e1a39d068$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $71e8fa2e1a39d068$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $71e8fa2e1a39d068$exports[key];
        }
    });
});
var $75358fa8addbab9b$exports = {};

$parcel$export($75358fa8addbab9b$exports, "isThisISOWeek", () => $75358fa8addbab9b$export$4e987896c721f753, (v) => $75358fa8addbab9b$export$4e987896c721f753 = v);
var $75358fa8addbab9b$export$4e987896c721f753;
"use strict";
$75358fa8addbab9b$export$4e987896c721f753 = $75358fa8addbab9b$var$isThisISOWeek;


/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */ function $75358fa8addbab9b$var$isThisISOWeek(date) {
    return (0, $974ec7e085b10b6f$export$1c6e74e3c7b27764)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($75358fa8addbab9b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $75358fa8addbab9b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $75358fa8addbab9b$exports[key];
        }
    });
});
var $0184bc42dc9e8339$exports = {};

$parcel$export($0184bc42dc9e8339$exports, "isThisMinute", () => $0184bc42dc9e8339$export$fa55b7d29d8d957a, (v) => $0184bc42dc9e8339$export$fa55b7d29d8d957a = v);
var $0184bc42dc9e8339$export$fa55b7d29d8d957a;
"use strict";
$0184bc42dc9e8339$export$fa55b7d29d8d957a = $0184bc42dc9e8339$var$isThisMinute;


/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */ function $0184bc42dc9e8339$var$isThisMinute(date) {
    return (0, $0721d44eef9fb57b$export$5d274bf63c8705cb)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($0184bc42dc9e8339$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0184bc42dc9e8339$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0184bc42dc9e8339$exports[key];
        }
    });
});
var $329d7ca2c774368f$exports = {};

$parcel$export($329d7ca2c774368f$exports, "isThisMonth", () => $329d7ca2c774368f$export$173f1e1d92847276, (v) => $329d7ca2c774368f$export$173f1e1d92847276 = v);
var $329d7ca2c774368f$export$173f1e1d92847276;
"use strict";
$329d7ca2c774368f$export$173f1e1d92847276 = $329d7ca2c774368f$var$isThisMonth;


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */ function $329d7ca2c774368f$var$isThisMonth(date) {
    return (0, $0ac5b0727b99a689$export$a18c89cbd24170ff)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($329d7ca2c774368f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $329d7ca2c774368f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $329d7ca2c774368f$exports[key];
        }
    });
});
var $84501e45ea71aff1$exports = {};

$parcel$export($84501e45ea71aff1$exports, "isThisQuarter", () => $84501e45ea71aff1$export$3d88fd18ab599ccc, (v) => $84501e45ea71aff1$export$3d88fd18ab599ccc = v);
var $84501e45ea71aff1$export$3d88fd18ab599ccc;
"use strict";
$84501e45ea71aff1$export$3d88fd18ab599ccc = $84501e45ea71aff1$var$isThisQuarter;


/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */ function $84501e45ea71aff1$var$isThisQuarter(date) {
    return (0, $9858c65b039df55e$export$5c60e4190867161c)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($84501e45ea71aff1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $84501e45ea71aff1$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $84501e45ea71aff1$exports[key];
        }
    });
});
var $493ea969a496616c$exports = {};

$parcel$export($493ea969a496616c$exports, "isThisSecond", () => $493ea969a496616c$export$8d7059b5bca087e6, (v) => $493ea969a496616c$export$8d7059b5bca087e6 = v);
var $493ea969a496616c$export$8d7059b5bca087e6;
"use strict";
$493ea969a496616c$export$8d7059b5bca087e6 = $493ea969a496616c$var$isThisSecond;


/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * const result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */ function $493ea969a496616c$var$isThisSecond(date) {
    return (0, $18ca48113ac8dc92$export$b88fbcfe038f3498)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($493ea969a496616c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $493ea969a496616c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $493ea969a496616c$exports[key];
        }
    });
});
var $48a3f8d0257a667a$exports = {};

$parcel$export($48a3f8d0257a667a$exports, "isThisWeek", () => $48a3f8d0257a667a$export$cfe4b66a69cdd8a, (v) => $48a3f8d0257a667a$export$cfe4b66a69cdd8a = v);
var $48a3f8d0257a667a$export$cfe4b66a69cdd8a;
"use strict";
$48a3f8d0257a667a$export$cfe4b66a69cdd8a = $48a3f8d0257a667a$var$isThisWeek;


/**
 * The {@link isThisWeek} function options.
 */ /**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */ function $48a3f8d0257a667a$var$isThisWeek(date, options) {
    return (0, $50f96f778309dce2$export$6ea683876c36b8d2)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date), options);
}


Object.keys($48a3f8d0257a667a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $48a3f8d0257a667a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $48a3f8d0257a667a$exports[key];
        }
    });
});
var $dd6a85e913326244$exports = {};

$parcel$export($dd6a85e913326244$exports, "isThisYear", () => $dd6a85e913326244$export$a28c94941893a5ac, (v) => $dd6a85e913326244$export$a28c94941893a5ac = v);
var $dd6a85e913326244$export$a28c94941893a5ac;
"use strict";
$dd6a85e913326244$export$a28c94941893a5ac = $dd6a85e913326244$var$isThisYear;


/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */ function $dd6a85e913326244$var$isThisYear(date) {
    return (0, $710a73e9ad832884$export$5841f9eb9773f25f)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($dd6a85e913326244$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $dd6a85e913326244$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $dd6a85e913326244$exports[key];
        }
    });
});
var $7e5333b3e3665b84$exports = {};

$parcel$export($7e5333b3e3665b84$exports, "isThursday", () => $7e5333b3e3665b84$export$c8e7c906983ea347, (v) => $7e5333b3e3665b84$export$c8e7c906983ea347 = v);
var $7e5333b3e3665b84$export$c8e7c906983ea347;
"use strict";
$7e5333b3e3665b84$export$c8e7c906983ea347 = $7e5333b3e3665b84$var$isThursday;

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */ function $7e5333b3e3665b84$var$isThursday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 4;
}


Object.keys($7e5333b3e3665b84$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7e5333b3e3665b84$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7e5333b3e3665b84$exports[key];
        }
    });
});
var $7a1f5c63ed94812a$exports = {};

$parcel$export($7a1f5c63ed94812a$exports, "isToday", () => $7a1f5c63ed94812a$export$629b0a497aa65267, (v) => $7a1f5c63ed94812a$export$629b0a497aa65267 = v);
var $7a1f5c63ed94812a$export$629b0a497aa65267;
"use strict";
$7a1f5c63ed94812a$export$629b0a497aa65267 = $7a1f5c63ed94812a$var$isToday;


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */ function $7a1f5c63ed94812a$var$isToday(date) {
    return (0, $0b5a89a8d61cafc4$export$ea39ec197993aef0)(date, (0, $719468786fc28a7e$export$18c3c6510fb97afc)(date));
}


Object.keys($7a1f5c63ed94812a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7a1f5c63ed94812a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7a1f5c63ed94812a$exports[key];
        }
    });
});
var $bfa9667c199417ca$exports = {};

$parcel$export($bfa9667c199417ca$exports, "isTomorrow", () => $bfa9667c199417ca$export$d6365ba92f0647f1, (v) => $bfa9667c199417ca$export$d6365ba92f0647f1 = v);
var $bfa9667c199417ca$export$d6365ba92f0647f1;
"use strict";
$bfa9667c199417ca$export$d6365ba92f0647f1 = $bfa9667c199417ca$var$isTomorrow;



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */ function $bfa9667c199417ca$var$isTomorrow(date) {
    return (0, $0b5a89a8d61cafc4$export$ea39ec197993aef0)(date, (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)((0, $719468786fc28a7e$export$18c3c6510fb97afc)(date), 1));
}


Object.keys($bfa9667c199417ca$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $bfa9667c199417ca$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $bfa9667c199417ca$exports[key];
        }
    });
});
var $2706259c401e71fa$exports = {};

$parcel$export($2706259c401e71fa$exports, "isTuesday", () => $2706259c401e71fa$export$90d50b8f209f5ac3, (v) => $2706259c401e71fa$export$90d50b8f209f5ac3 = v);
var $2706259c401e71fa$export$90d50b8f209f5ac3;
"use strict";
$2706259c401e71fa$export$90d50b8f209f5ac3 = $2706259c401e71fa$var$isTuesday;

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */ function $2706259c401e71fa$var$isTuesday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 2;
}


Object.keys($2706259c401e71fa$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2706259c401e71fa$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2706259c401e71fa$exports[key];
        }
    });
});

Object.keys($fe1f9cf876b66eab$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $fe1f9cf876b66eab$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $fe1f9cf876b66eab$exports[key];
        }
    });
});
var $88b111ed929ae341$exports = {};

$parcel$export($88b111ed929ae341$exports, "isWednesday", () => $88b111ed929ae341$export$ec9de642cdd62944, (v) => $88b111ed929ae341$export$ec9de642cdd62944 = v);
var $88b111ed929ae341$export$ec9de642cdd62944;
"use strict";
$88b111ed929ae341$export$ec9de642cdd62944 = $88b111ed929ae341$var$isWednesday;

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */ function $88b111ed929ae341$var$isWednesday(date) {
    return (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date).getDay() === 3;
}


Object.keys($88b111ed929ae341$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $88b111ed929ae341$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $88b111ed929ae341$exports[key];
        }
    });
});

Object.keys($f2cc1bbbb36bdd33$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f2cc1bbbb36bdd33$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f2cc1bbbb36bdd33$exports[key];
        }
    });
});
var $49a466cbf695af80$exports = {};

$parcel$export($49a466cbf695af80$exports, "isWithinInterval", () => $49a466cbf695af80$export$d7deef7a3738e19d, (v) => $49a466cbf695af80$export$d7deef7a3738e19d = v);
var $49a466cbf695af80$export$d7deef7a3738e19d;
"use strict";
$49a466cbf695af80$export$d7deef7a3738e19d = $49a466cbf695af80$var$isWithinInterval;

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param interval - The interval to check
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */ function $49a466cbf695af80$var$isWithinInterval(date, interval) {
    const time = +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const [startTime, endTime] = [
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.start),
        +(0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(interval.end)
    ].sort((a, b)=>a - b);
    return time >= startTime && time <= endTime;
}


Object.keys($49a466cbf695af80$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $49a466cbf695af80$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $49a466cbf695af80$exports[key];
        }
    });
});
var $61712cdbc74abc9f$exports = {};

$parcel$export($61712cdbc74abc9f$exports, "isYesterday", () => $61712cdbc74abc9f$export$221990270ebfe867, (v) => $61712cdbc74abc9f$export$221990270ebfe867 = v);
var $61712cdbc74abc9f$export$221990270ebfe867;
"use strict";
$61712cdbc74abc9f$export$221990270ebfe867 = $61712cdbc74abc9f$var$isYesterday;


var $a61e1fbf42d5080c$exports = {};

$parcel$export($a61e1fbf42d5080c$exports, "subDays", () => $a61e1fbf42d5080c$export$70823084e2deb1ea, (v) => $a61e1fbf42d5080c$export$70823084e2deb1ea = v);
var $a61e1fbf42d5080c$export$70823084e2deb1ea;
"use strict";
$a61e1fbf42d5080c$export$70823084e2deb1ea = $a61e1fbf42d5080c$var$subDays;

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */ function $a61e1fbf42d5080c$var$subDays(date, amount) {
    return (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(date, -amount);
}


/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */ function $61712cdbc74abc9f$var$isYesterday(date) {
    return (0, $0b5a89a8d61cafc4$export$ea39ec197993aef0)(date, (0, $a61e1fbf42d5080c$export$70823084e2deb1ea)((0, $719468786fc28a7e$export$18c3c6510fb97afc)(date), 1));
}


Object.keys($61712cdbc74abc9f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $61712cdbc74abc9f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $61712cdbc74abc9f$exports[key];
        }
    });
});
var $91987a90a8f5bb22$exports = {};

$parcel$export($91987a90a8f5bb22$exports, "lastDayOfDecade", () => $91987a90a8f5bb22$export$2aaf6241f57dd605, (v) => $91987a90a8f5bb22$export$2aaf6241f57dd605 = v);
var $91987a90a8f5bb22$export$2aaf6241f57dd605;
"use strict";
$91987a90a8f5bb22$export$2aaf6241f57dd605 = $91987a90a8f5bb22$var$lastDayOfDecade;

/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a decade
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * const result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */ function $91987a90a8f5bb22$var$lastDayOfDecade(date) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const decade = 9 + Math.floor(year / 10) * 10;
    _date.setFullYear(decade + 1, 0, 0);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


Object.keys($91987a90a8f5bb22$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $91987a90a8f5bb22$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $91987a90a8f5bb22$exports[key];
        }
    });
});
var $2428f29f5dc8f696$exports = {};

$parcel$export($2428f29f5dc8f696$exports, "lastDayOfISOWeek", () => $2428f29f5dc8f696$export$b08a8fc26ae6d94b, (v) => $2428f29f5dc8f696$export$b08a8fc26ae6d94b = v);
var $2428f29f5dc8f696$export$b08a8fc26ae6d94b;
"use strict";
$2428f29f5dc8f696$export$b08a8fc26ae6d94b = $2428f29f5dc8f696$var$lastDayOfISOWeek;
var $a413b63db6a86128$exports = {};

$parcel$export($a413b63db6a86128$exports, "lastDayOfWeek", () => $a413b63db6a86128$export$b73502c35a293b0a, (v) => $a413b63db6a86128$export$b73502c35a293b0a = v);
var $a413b63db6a86128$export$b73502c35a293b0a;
"use strict";
$a413b63db6a86128$export$b73502c35a293b0a = $a413b63db6a86128$var$lastDayOfWeek;


/**
 * The {@link lastDayOfWeek} function options.
 */ /**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The last day of a week
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * const result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * const result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */ function $a413b63db6a86128$var$lastDayOfWeek(date, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setHours(0, 0, 0, 0);
    _date.setDate(_date.getDate() + diff);
    return _date;
}


/**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * const result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */ function $2428f29f5dc8f696$var$lastDayOfISOWeek(date) {
    return (0, $a413b63db6a86128$export$b73502c35a293b0a)(date, {
        weekStartsOn: 1
    });
}


Object.keys($2428f29f5dc8f696$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2428f29f5dc8f696$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2428f29f5dc8f696$exports[key];
        }
    });
});
var $ae70e72ff99b5db0$exports = {};

$parcel$export($ae70e72ff99b5db0$exports, "lastDayOfISOWeekYear", () => $ae70e72ff99b5db0$export$1810bada8cd02ee1, (v) => $ae70e72ff99b5db0$export$1810bada8cd02ee1 = v);
var $ae70e72ff99b5db0$export$1810bada8cd02ee1;
"use strict";
$ae70e72ff99b5db0$export$1810bada8cd02ee1 = $ae70e72ff99b5db0$var$lastDayOfISOWeekYear;



/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * const result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */ function $ae70e72ff99b5db0$var$lastDayOfISOWeekYear(date) {
    const year = (0, $f406a700497c04bb$export$3dbc52535f6f8fcc)(date);
    const fourthOfJanuary = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    fourthOfJanuary.setFullYear(year + 1, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    const _date = (0, $a0788919f0f9c7eb$export$6173213f95a4431e)(fourthOfJanuary);
    _date.setDate(_date.getDate() - 1);
    return _date;
}


Object.keys($ae70e72ff99b5db0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ae70e72ff99b5db0$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ae70e72ff99b5db0$exports[key];
        }
    });
});

Object.keys($1393e86dcdb7cd43$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1393e86dcdb7cd43$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1393e86dcdb7cd43$exports[key];
        }
    });
});
var $e04e7a6f1d202e69$exports = {};

$parcel$export($e04e7a6f1d202e69$exports, "lastDayOfQuarter", () => $e04e7a6f1d202e69$export$8693c04228304c7, (v) => $e04e7a6f1d202e69$export$8693c04228304c7 = v);
var $e04e7a6f1d202e69$export$8693c04228304c7;
"use strict";
$e04e7a6f1d202e69$export$8693c04228304c7 = $e04e7a6f1d202e69$var$lastDayOfQuarter;

/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */ function $e04e7a6f1d202e69$var$lastDayOfQuarter(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const currentMonth = _date.getMonth();
    const month = currentMonth - currentMonth % 3 + 3;
    _date.setMonth(month, 0);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


Object.keys($e04e7a6f1d202e69$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e04e7a6f1d202e69$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e04e7a6f1d202e69$exports[key];
        }
    });
});

Object.keys($a413b63db6a86128$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a413b63db6a86128$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a413b63db6a86128$exports[key];
        }
    });
});
var $ed6bafa7dab72732$exports = {};

$parcel$export($ed6bafa7dab72732$exports, "lastDayOfYear", () => $ed6bafa7dab72732$export$323f7bc07b828bed, (v) => $ed6bafa7dab72732$export$323f7bc07b828bed = v);
var $ed6bafa7dab72732$export$323f7bc07b828bed;
"use strict";
$ed6bafa7dab72732$export$323f7bc07b828bed = $ed6bafa7dab72732$var$lastDayOfYear;

/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * const result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */ function $ed6bafa7dab72732$var$lastDayOfYear(date) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    _date.setFullYear(year + 1, 0, 0);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


Object.keys($ed6bafa7dab72732$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ed6bafa7dab72732$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ed6bafa7dab72732$exports[key];
        }
    });
});
var $ae9687825ccd5f88$exports = {};
"use strict";
$ae9687825ccd5f88$exports.lightFormat = $ae9687825ccd5f88$var$lightFormat;
Object.defineProperty($ae9687825ccd5f88$exports, "lightFormatters", {
    enumerable: true,
    get: function() {
        return $e2a9cf0830422dc2$export$b0d4b338e1516f13;
    }
});



// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const $ae9687825ccd5f88$var$formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const $ae9687825ccd5f88$var$escapedStringRegExp = /^'([^]*?)'?$/;
const $ae9687825ccd5f88$var$doubleQuoteRegExp = /''/g;
const $ae9687825ccd5f88$var$unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @private
 */ /**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 001, ..., 999                |
 * |                                 | SSSS    | ...                               |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 *
 * @returns The formatted date string
 *
 * @throws `Invalid time value` if the date is invalid
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */ function $ae9687825ccd5f88$var$lightFormat(date, formatStr) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    if (!(0, $fe1f9cf876b66eab$export$1ea939691cdc45b8)(_date)) throw new RangeError("Invalid time value");
    const tokens = formatStr.match($ae9687825ccd5f88$var$formattingTokensRegExp);
    // The only case when formattingTokensRegExp doesn't match the string is when it's empty
    if (!tokens) return "";
    const result = tokens.map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        const firstCharacter = substring[0];
        if (firstCharacter === "'") return $ae9687825ccd5f88$var$cleanEscapedString(substring);
        const formatter = $e2a9cf0830422dc2$export$b0d4b338e1516f13[firstCharacter];
        if (formatter) return formatter(_date, substring);
        if (firstCharacter.match($ae9687825ccd5f88$var$unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
    }).join("");
    return result;
}
function $ae9687825ccd5f88$var$cleanEscapedString(input) {
    const matches = input.match($ae9687825ccd5f88$var$escapedStringRegExp);
    if (!matches) return input;
    return matches[1].replace($ae9687825ccd5f88$var$doubleQuoteRegExp, "'");
}


Object.keys($ae9687825ccd5f88$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ae9687825ccd5f88$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ae9687825ccd5f88$exports[key];
        }
    });
});

Object.keys($8596ddf382780ca2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8596ddf382780ca2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8596ddf382780ca2$exports[key];
        }
    });
});
var $ce8573260ea38445$exports = {};

$parcel$export($ce8573260ea38445$exports, "milliseconds", () => $ce8573260ea38445$export$9a27fac83d67afd3, (v) => $ce8573260ea38445$export$9a27fac83d67afd3 = v);
var $ce8573260ea38445$export$9a27fac83d67afd3;
"use strict";
$ce8573260ea38445$export$9a27fac83d67afd3 = $ce8573260ea38445$var$milliseconds;

/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * @returns The milliseconds
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */ function $ce8573260ea38445$var$milliseconds({ years: years, months: months, weeks: weeks, days: days, hours: hours, minutes: minutes, seconds: seconds }) {
    let totalDays = 0;
    if (years) totalDays += years * $14ce387571ca9ade$export$3913210603d8e9ae;
    if (months) totalDays += months * ($14ce387571ca9ade$export$3913210603d8e9ae / 12);
    if (weeks) totalDays += weeks * 7;
    if (days) totalDays += days;
    let totalSeconds = totalDays * 86400;
    if (hours) totalSeconds += hours * 3600;
    if (minutes) totalSeconds += minutes * 60;
    if (seconds) totalSeconds += seconds;
    return Math.trunc(totalSeconds * 1000);
}


Object.keys($ce8573260ea38445$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ce8573260ea38445$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ce8573260ea38445$exports[key];
        }
    });
});
var $137f57d825e63c4c$exports = {};

$parcel$export($137f57d825e63c4c$exports, "millisecondsToHours", () => $137f57d825e63c4c$export$689a412b29fa9ed5, (v) => $137f57d825e63c4c$export$689a412b29fa9ed5 = v);
var $137f57d825e63c4c$export$689a412b29fa9ed5;
"use strict";
$137f57d825e63c4c$export$689a412b29fa9ed5 = $137f57d825e63c4c$var$millisecondsToHours;

/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in hours
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */ function $137f57d825e63c4c$var$millisecondsToHours(milliseconds) {
    const hours = milliseconds / $14ce387571ca9ade$export$7f72910d6dfd237a;
    return Math.trunc(hours);
}


Object.keys($137f57d825e63c4c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $137f57d825e63c4c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $137f57d825e63c4c$exports[key];
        }
    });
});
var $831bcd93e5070c7e$exports = {};

$parcel$export($831bcd93e5070c7e$exports, "millisecondsToMinutes", () => $831bcd93e5070c7e$export$a5f974e81e48cfc0, (v) => $831bcd93e5070c7e$export$a5f974e81e48cfc0 = v);
var $831bcd93e5070c7e$export$a5f974e81e48cfc0;
"use strict";
$831bcd93e5070c7e$export$a5f974e81e48cfc0 = $831bcd93e5070c7e$var$millisecondsToMinutes;

/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in minutes
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */ function $831bcd93e5070c7e$var$millisecondsToMinutes(milliseconds) {
    const minutes = milliseconds / $14ce387571ca9ade$export$91246f0b9bd9beff;
    return Math.trunc(minutes);
}


Object.keys($831bcd93e5070c7e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $831bcd93e5070c7e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $831bcd93e5070c7e$exports[key];
        }
    });
});
var $99a2ff33925aafc6$exports = {};

$parcel$export($99a2ff33925aafc6$exports, "millisecondsToSeconds", () => $99a2ff33925aafc6$export$f64c3bfbc58eec0f, (v) => $99a2ff33925aafc6$export$f64c3bfbc58eec0f = v);
var $99a2ff33925aafc6$export$f64c3bfbc58eec0f;
"use strict";
$99a2ff33925aafc6$export$f64c3bfbc58eec0f = $99a2ff33925aafc6$var$millisecondsToSeconds;

/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in seconds
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */ function $99a2ff33925aafc6$var$millisecondsToSeconds(milliseconds) {
    const seconds = milliseconds / $14ce387571ca9ade$export$397c2d5776aa9055;
    return Math.trunc(seconds);
}


Object.keys($99a2ff33925aafc6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $99a2ff33925aafc6$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $99a2ff33925aafc6$exports[key];
        }
    });
});

Object.keys($d1c87a2fe7d62d0f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d1c87a2fe7d62d0f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d1c87a2fe7d62d0f$exports[key];
        }
    });
});
var $995cbde21adafd93$exports = {};

$parcel$export($995cbde21adafd93$exports, "minutesToHours", () => $995cbde21adafd93$export$815164eb42530ae7, (v) => $995cbde21adafd93$export$815164eb42530ae7 = v);
var $995cbde21adafd93$export$815164eb42530ae7;
"use strict";
$995cbde21adafd93$export$815164eb42530ae7 = $995cbde21adafd93$var$minutesToHours;

/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in hours
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */ function $995cbde21adafd93$var$minutesToHours(minutes) {
    const hours = minutes / $14ce387571ca9ade$export$f2f5ae5a8e2d8f9f;
    return Math.trunc(hours);
}


Object.keys($995cbde21adafd93$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $995cbde21adafd93$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $995cbde21adafd93$exports[key];
        }
    });
});
var $8287a4889a8d5690$exports = {};

$parcel$export($8287a4889a8d5690$exports, "minutesToMilliseconds", () => $8287a4889a8d5690$export$f6b9795ef9056e3d, (v) => $8287a4889a8d5690$export$f6b9795ef9056e3d = v);
var $8287a4889a8d5690$export$f6b9795ef9056e3d;
"use strict";
$8287a4889a8d5690$export$f6b9795ef9056e3d = $8287a4889a8d5690$var$minutesToMilliseconds;

/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in milliseconds
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */ function $8287a4889a8d5690$var$minutesToMilliseconds(minutes) {
    return Math.trunc(minutes * $14ce387571ca9ade$export$91246f0b9bd9beff);
}


Object.keys($8287a4889a8d5690$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8287a4889a8d5690$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8287a4889a8d5690$exports[key];
        }
    });
});
var $9413a4d77a1407fd$exports = {};

$parcel$export($9413a4d77a1407fd$exports, "minutesToSeconds", () => $9413a4d77a1407fd$export$81ded4628c655103, (v) => $9413a4d77a1407fd$export$81ded4628c655103 = v);
var $9413a4d77a1407fd$export$81ded4628c655103;
"use strict";
$9413a4d77a1407fd$export$81ded4628c655103 = $9413a4d77a1407fd$var$minutesToSeconds;

/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in seconds
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */ function $9413a4d77a1407fd$var$minutesToSeconds(minutes) {
    return Math.trunc(minutes * $14ce387571ca9ade$export$a77c1a7ebebe2a5a);
}


Object.keys($9413a4d77a1407fd$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9413a4d77a1407fd$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9413a4d77a1407fd$exports[key];
        }
    });
});
var $ebdbadd99f01ee1c$exports = {};

$parcel$export($ebdbadd99f01ee1c$exports, "monthsToQuarters", () => $ebdbadd99f01ee1c$export$1932fa2a2068c849, (v) => $ebdbadd99f01ee1c$export$1932fa2a2068c849 = v);
var $ebdbadd99f01ee1c$export$1932fa2a2068c849;
"use strict";
$ebdbadd99f01ee1c$export$1932fa2a2068c849 = $ebdbadd99f01ee1c$var$monthsToQuarters;

/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param months - The number of months to be converted.
 *
 * @returns The number of months converted in quarters
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */ function $ebdbadd99f01ee1c$var$monthsToQuarters(months) {
    const quarters = months / $14ce387571ca9ade$export$3c58128db900d44e;
    return Math.trunc(quarters);
}


Object.keys($ebdbadd99f01ee1c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ebdbadd99f01ee1c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ebdbadd99f01ee1c$exports[key];
        }
    });
});
var $9151fe6e53a0609f$exports = {};

$parcel$export($9151fe6e53a0609f$exports, "monthsToYears", () => $9151fe6e53a0609f$export$7489026ed27fc925, (v) => $9151fe6e53a0609f$export$7489026ed27fc925 = v);
var $9151fe6e53a0609f$export$7489026ed27fc925;
"use strict";
$9151fe6e53a0609f$export$7489026ed27fc925 = $9151fe6e53a0609f$var$monthsToYears;

/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param months - The number of months to be converted
 *
 * @returns The number of months converted in years
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding:
 * const result = monthsToYears(40)
 * //=> 3
 */ function $9151fe6e53a0609f$var$monthsToYears(months) {
    const years = months / $14ce387571ca9ade$export$80d7e435f744f319;
    return Math.trunc(years);
}


Object.keys($9151fe6e53a0609f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9151fe6e53a0609f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9151fe6e53a0609f$exports[key];
        }
    });
});
var $ef5d1f387c6befe0$exports = {};

$parcel$export($ef5d1f387c6befe0$exports, "nextDay", () => $ef5d1f387c6befe0$export$992728922317ffc8, (v) => $ef5d1f387c6befe0$export$992728922317ffc8 = v);
var $ef5d1f387c6befe0$export$992728922317ffc8;
"use strict";
$ef5d1f387c6befe0$export$992728922317ffc8 = $ef5d1f387c6befe0$var$nextDay;


/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param day - day of the week
 *
 * @returns The date is the next day of week
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */ function $ef5d1f387c6befe0$var$nextDay(date, day) {
    let delta = day - (0, $573b7090c7eca26f$export$1b64bc9c5306ed54)(date);
    if (delta <= 0) delta += 7;
    return (0, $286d3700a480f77f$export$dd412b56f1e4d8aa)(date, delta);
}


Object.keys($ef5d1f387c6befe0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ef5d1f387c6befe0$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ef5d1f387c6befe0$exports[key];
        }
    });
});
var $b464a947e58ea1e0$exports = {};

$parcel$export($b464a947e58ea1e0$exports, "nextFriday", () => $b464a947e58ea1e0$export$21d76934fce76327, (v) => $b464a947e58ea1e0$export$21d76934fce76327 = v);
var $b464a947e58ea1e0$export$21d76934fce76327;
"use strict";
$b464a947e58ea1e0$export$21d76934fce76327 = $b464a947e58ea1e0$var$nextFriday;

/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Friday
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */ function $b464a947e58ea1e0$var$nextFriday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 5);
}


Object.keys($b464a947e58ea1e0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b464a947e58ea1e0$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b464a947e58ea1e0$exports[key];
        }
    });
});
var $9b7958dddc3b19de$exports = {};

$parcel$export($9b7958dddc3b19de$exports, "nextMonday", () => $9b7958dddc3b19de$export$a20373bb0df6efdd, (v) => $9b7958dddc3b19de$export$a20373bb0df6efdd = v);
var $9b7958dddc3b19de$export$a20373bb0df6efdd;
"use strict";
$9b7958dddc3b19de$export$a20373bb0df6efdd = $9b7958dddc3b19de$var$nextMonday;

/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Monday
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */ function $9b7958dddc3b19de$var$nextMonday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 1);
}


Object.keys($9b7958dddc3b19de$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9b7958dddc3b19de$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9b7958dddc3b19de$exports[key];
        }
    });
});
var $0646a0a40d350356$exports = {};

$parcel$export($0646a0a40d350356$exports, "nextSaturday", () => $0646a0a40d350356$export$c52f069246f7b032, (v) => $0646a0a40d350356$export$c52f069246f7b032 = v);
var $0646a0a40d350356$export$c52f069246f7b032;
"use strict";
$0646a0a40d350356$export$c52f069246f7b032 = $0646a0a40d350356$var$nextSaturday;

/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Saturday
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */ function $0646a0a40d350356$var$nextSaturday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 6);
}


Object.keys($0646a0a40d350356$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0646a0a40d350356$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0646a0a40d350356$exports[key];
        }
    });
});
var $19a7602be8d878ad$exports = {};

$parcel$export($19a7602be8d878ad$exports, "nextSunday", () => $19a7602be8d878ad$export$a30adaa3ef47f854, (v) => $19a7602be8d878ad$export$a30adaa3ef47f854 = v);
var $19a7602be8d878ad$export$a30adaa3ef47f854;
"use strict";
$19a7602be8d878ad$export$a30adaa3ef47f854 = $19a7602be8d878ad$var$nextSunday;

/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Sunday
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */ function $19a7602be8d878ad$var$nextSunday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 0);
}


Object.keys($19a7602be8d878ad$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $19a7602be8d878ad$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $19a7602be8d878ad$exports[key];
        }
    });
});
var $1cf650a034517f16$exports = {};

$parcel$export($1cf650a034517f16$exports, "nextThursday", () => $1cf650a034517f16$export$36d9a8523a98d5a4, (v) => $1cf650a034517f16$export$36d9a8523a98d5a4 = v);
var $1cf650a034517f16$export$36d9a8523a98d5a4;
"use strict";
$1cf650a034517f16$export$36d9a8523a98d5a4 = $1cf650a034517f16$var$nextThursday;

/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Thursday
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */ function $1cf650a034517f16$var$nextThursday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 4);
}


Object.keys($1cf650a034517f16$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1cf650a034517f16$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1cf650a034517f16$exports[key];
        }
    });
});
var $45018dd624e10adc$exports = {};

$parcel$export($45018dd624e10adc$exports, "nextTuesday", () => $45018dd624e10adc$export$391d63ff7dc2f668, (v) => $45018dd624e10adc$export$391d63ff7dc2f668 = v);
var $45018dd624e10adc$export$391d63ff7dc2f668;
"use strict";
$45018dd624e10adc$export$391d63ff7dc2f668 = $45018dd624e10adc$var$nextTuesday;

/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Tuesday
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */ function $45018dd624e10adc$var$nextTuesday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 2);
}


Object.keys($45018dd624e10adc$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $45018dd624e10adc$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $45018dd624e10adc$exports[key];
        }
    });
});
var $e137189bf0a82611$exports = {};

$parcel$export($e137189bf0a82611$exports, "nextWednesday", () => $e137189bf0a82611$export$7a895c1ff204304e, (v) => $e137189bf0a82611$export$7a895c1ff204304e = v);
var $e137189bf0a82611$export$7a895c1ff204304e;
"use strict";
$e137189bf0a82611$export$7a895c1ff204304e = $e137189bf0a82611$var$nextWednesday;

/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Wednesday
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */ function $e137189bf0a82611$var$nextWednesday(date) {
    return (0, $ef5d1f387c6befe0$export$992728922317ffc8)(date, 3);
}


Object.keys($e137189bf0a82611$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $e137189bf0a82611$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $e137189bf0a82611$exports[key];
        }
    });
});

Object.keys($ac47ffb99f1190cb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ac47ffb99f1190cb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ac47ffb99f1190cb$exports[key];
        }
    });
});
var $35ef510d772d1307$exports = {};

$parcel$export($35ef510d772d1307$exports, "parseISO", () => $35ef510d772d1307$export$4393d2ccbbedb219, (v) => $35ef510d772d1307$export$4393d2ccbbedb219 = v);
var $35ef510d772d1307$export$4393d2ccbbedb219;
"use strict";
$35ef510d772d1307$export$4393d2ccbbedb219 = $35ef510d772d1307$var$parseISO;

/**
 * The {@link parseISO} function options.
 */ /**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */ function $35ef510d772d1307$var$parseISO(argument, options) {
    const additionalDigits = options?.additionalDigits ?? 2;
    const dateStrings = $35ef510d772d1307$var$splitDateString(argument);
    let date;
    if (dateStrings.date) {
        const parseYearResult = $35ef510d772d1307$var$parseYear(dateStrings.date, additionalDigits);
        date = $35ef510d772d1307$var$parseDate(parseYearResult.restDateString, parseYearResult.year);
    }
    if (!date || isNaN(date.getTime())) return new Date(NaN);
    const timestamp = date.getTime();
    let time = 0;
    let offset;
    if (dateStrings.time) {
        time = $35ef510d772d1307$var$parseTime(dateStrings.time);
        if (isNaN(time)) return new Date(NaN);
    }
    if (dateStrings.timezone) {
        offset = $35ef510d772d1307$var$parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) return new Date(NaN);
    } else {
        const dirtyDate = new Date(timestamp + time);
        // JS parsed string assuming it's in UTC timezone
        // but we need it to be parsed in our timezone
        // so we use utc values to build date in our timezone.
        // Year values from 0 to 99 map to the years 1900 to 1999
        // so set year explicitly with setFullYear.
        const result = new Date(0);
        result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
        result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
        return result;
    }
    return new Date(timestamp + time + offset);
}
const $35ef510d772d1307$var$patterns = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
};
const $35ef510d772d1307$var$dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const $35ef510d772d1307$var$timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const $35ef510d772d1307$var$timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function $35ef510d772d1307$var$splitDateString(dateString) {
    const dateStrings = {};
    const array = dateString.split($35ef510d772d1307$var$patterns.dateTimeDelimiter);
    let timeString;
    // The regex match should only return at maximum two array elements.
    // [date], [time], or [date, time].
    if (array.length > 2) return dateStrings;
    if (/:/.test(array[0])) timeString = array[0];
    else {
        dateStrings.date = array[0];
        timeString = array[1];
        if ($35ef510d772d1307$var$patterns.timeZoneDelimiter.test(dateStrings.date)) {
            dateStrings.date = dateString.split($35ef510d772d1307$var$patterns.timeZoneDelimiter)[0];
            timeString = dateString.substr(dateStrings.date.length, dateString.length);
        }
    }
    if (timeString) {
        const token = $35ef510d772d1307$var$patterns.timezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], "");
            dateStrings.timezone = token[1];
        } else dateStrings.time = timeString;
    }
    return dateStrings;
}
function $35ef510d772d1307$var$parseYear(dateString, additionalDigits) {
    const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
    const captures = dateString.match(regex);
    // Invalid ISO-formatted year
    if (!captures) return {
        year: NaN,
        restDateString: ""
    };
    const year = captures[1] ? parseInt(captures[1]) : null;
    const century = captures[2] ? parseInt(captures[2]) : null;
    // either year or century is null, not both
    return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
    };
}
function $35ef510d772d1307$var$parseDate(dateString, year) {
    // Invalid ISO-formatted year
    if (year === null) return new Date(NaN);
    const captures = dateString.match($35ef510d772d1307$var$dateRegex);
    // Invalid ISO-formatted string
    if (!captures) return new Date(NaN);
    const isWeekDate = !!captures[4];
    const dayOfYear = $35ef510d772d1307$var$parseDateUnit(captures[1]);
    const month = $35ef510d772d1307$var$parseDateUnit(captures[2]) - 1;
    const day = $35ef510d772d1307$var$parseDateUnit(captures[3]);
    const week = $35ef510d772d1307$var$parseDateUnit(captures[4]);
    const dayOfWeek = $35ef510d772d1307$var$parseDateUnit(captures[5]) - 1;
    if (isWeekDate) {
        if (!$35ef510d772d1307$var$validateWeekDate(year, week, dayOfWeek)) return new Date(NaN);
        return $35ef510d772d1307$var$dayOfISOWeekYear(year, week, dayOfWeek);
    } else {
        const date = new Date(0);
        if (!$35ef510d772d1307$var$validateDate(year, month, day) || !$35ef510d772d1307$var$validateDayOfYearDate(year, dayOfYear)) return new Date(NaN);
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
    }
}
function $35ef510d772d1307$var$parseDateUnit(value) {
    return value ? parseInt(value) : 1;
}
function $35ef510d772d1307$var$parseTime(timeString) {
    const captures = timeString.match($35ef510d772d1307$var$timeRegex);
    if (!captures) return NaN; // Invalid ISO-formatted time
    const hours = $35ef510d772d1307$var$parseTimeUnit(captures[1]);
    const minutes = $35ef510d772d1307$var$parseTimeUnit(captures[2]);
    const seconds = $35ef510d772d1307$var$parseTimeUnit(captures[3]);
    if (!$35ef510d772d1307$var$validateTime(hours, minutes, seconds)) return NaN;
    return hours * $14ce387571ca9ade$export$7f72910d6dfd237a + minutes * $14ce387571ca9ade$export$91246f0b9bd9beff + seconds * 1000;
}
function $35ef510d772d1307$var$parseTimeUnit(value) {
    return value && parseFloat(value.replace(",", ".")) || 0;
}
function $35ef510d772d1307$var$parseTimezone(timezoneString) {
    if (timezoneString === "Z") return 0;
    const captures = timezoneString.match($35ef510d772d1307$var$timezoneRegex);
    if (!captures) return 0;
    const sign = captures[1] === "+" ? -1 : 1;
    const hours = parseInt(captures[2]);
    const minutes = captures[3] && parseInt(captures[3]) || 0;
    if (!$35ef510d772d1307$var$validateTimezone(hours, minutes)) return NaN;
    return sign * (hours * $14ce387571ca9ade$export$7f72910d6dfd237a + minutes * $14ce387571ca9ade$export$91246f0b9bd9beff);
}
function $35ef510d772d1307$var$dayOfISOWeekYear(isoWeekYear, week, day) {
    const date = new Date(0);
    date.setUTCFullYear(isoWeekYear, 0, 4);
    const fourthOfJanuaryDay = date.getUTCDay() || 7;
    const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// Validation functions
// February is null to handle the leap year (using ||)
const $35ef510d772d1307$var$daysInMonths = [
    31,
    null,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function $35ef510d772d1307$var$isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function $35ef510d772d1307$var$validateDate(year, month, date) {
    return month >= 0 && month <= 11 && date >= 1 && date <= ($35ef510d772d1307$var$daysInMonths[month] || ($35ef510d772d1307$var$isLeapYearIndex(year) ? 29 : 28));
}
function $35ef510d772d1307$var$validateDayOfYearDate(year, dayOfYear) {
    return dayOfYear >= 1 && dayOfYear <= ($35ef510d772d1307$var$isLeapYearIndex(year) ? 366 : 365);
}
function $35ef510d772d1307$var$validateWeekDate(_year, week, day) {
    return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function $35ef510d772d1307$var$validateTime(hours, minutes, seconds) {
    if (hours === 24) return minutes === 0 && seconds === 0;
    return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function $35ef510d772d1307$var$validateTimezone(_hours, minutes) {
    return minutes >= 0 && minutes <= 59;
}


Object.keys($35ef510d772d1307$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $35ef510d772d1307$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $35ef510d772d1307$exports[key];
        }
    });
});
var $3bea13d34c0e7b53$exports = {};

$parcel$export($3bea13d34c0e7b53$exports, "parseJSON", () => $3bea13d34c0e7b53$export$27924e57e9afff7f, (v) => $3bea13d34c0e7b53$export$27924e57e9afff7f = v);
var $3bea13d34c0e7b53$export$27924e57e9afff7f;
"use strict";
$3bea13d34c0e7b53$export$27924e57e9afff7f = $3bea13d34c0e7b53$var$parseJSON; /**
 * @name parseJSON
 * @category Common Helpers
 * @summary Parse a JSON date string
 *
 * @description
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 * - `2000-03-15T05:20:10Z`: Without milliseconds
 * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds
 * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate](https://date-fns.org/docs/toDate):
 *
 * - A `Date` instance will be cloned
 * - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @param dateStr - A fully formed ISO8601 date string to convert
 *
 * @returns The parsed date in the local time zone
 */ 
function $3bea13d34c0e7b53$var$parseJSON(dateStr) {
    const parts = dateStr.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    if (parts) // Group 8 matches the sign
    return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1), +parts[6], +((parts[7] || "0") + "00").substring(0, 3)));
    return new Date(NaN);
}


Object.keys($3bea13d34c0e7b53$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3bea13d34c0e7b53$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3bea13d34c0e7b53$exports[key];
        }
    });
});
var $52353a762e71081e$exports = {};

$parcel$export($52353a762e71081e$exports, "previousDay", () => $52353a762e71081e$export$4caccb62df4eacc0, (v) => $52353a762e71081e$export$4caccb62df4eacc0 = v);
var $52353a762e71081e$export$4caccb62df4eacc0;
"use strict";
$52353a762e71081e$export$4caccb62df4eacc0 = $52353a762e71081e$var$previousDay;


/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param day - The day of the week
 *
 * @returns The date is the previous day of week
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */ function $52353a762e71081e$var$previousDay(date, day) {
    let delta = (0, $573b7090c7eca26f$export$1b64bc9c5306ed54)(date) - day;
    if (delta <= 0) delta += 7;
    return (0, $a61e1fbf42d5080c$export$70823084e2deb1ea)(date, delta);
}


Object.keys($52353a762e71081e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $52353a762e71081e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $52353a762e71081e$exports[key];
        }
    });
});
var $d3d9d968e2c45b12$exports = {};

$parcel$export($d3d9d968e2c45b12$exports, "previousFriday", () => $d3d9d968e2c45b12$export$32d52646c338c11d, (v) => $d3d9d968e2c45b12$export$32d52646c338c11d = v);
var $d3d9d968e2c45b12$export$32d52646c338c11d;
"use strict";
$d3d9d968e2c45b12$export$32d52646c338c11d = $d3d9d968e2c45b12$var$previousFriday;

/**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Friday
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * const result = previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */ function $d3d9d968e2c45b12$var$previousFriday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 5);
}


Object.keys($d3d9d968e2c45b12$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d3d9d968e2c45b12$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d3d9d968e2c45b12$exports[key];
        }
    });
});
var $667fa028774db00b$exports = {};

$parcel$export($667fa028774db00b$exports, "previousMonday", () => $667fa028774db00b$export$398437ab6f45c582, (v) => $667fa028774db00b$export$398437ab6f45c582 = v);
var $667fa028774db00b$export$398437ab6f45c582;
"use strict";
$667fa028774db00b$export$398437ab6f45c582 = $667fa028774db00b$var$previousMonday;

/**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Monday
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * const result = previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */ function $667fa028774db00b$var$previousMonday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 1);
}


Object.keys($667fa028774db00b$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $667fa028774db00b$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $667fa028774db00b$exports[key];
        }
    });
});
var $be4d4c62a77de3df$exports = {};

$parcel$export($be4d4c62a77de3df$exports, "previousSaturday", () => $be4d4c62a77de3df$export$36767a7e6101ecb0, (v) => $be4d4c62a77de3df$export$36767a7e6101ecb0 = v);
var $be4d4c62a77de3df$export$36767a7e6101ecb0;
"use strict";
$be4d4c62a77de3df$export$36767a7e6101ecb0 = $be4d4c62a77de3df$var$previousSaturday;

/**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Saturday
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Sat June 19 2021 00:00:00
 */ function $be4d4c62a77de3df$var$previousSaturday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 6);
}


Object.keys($be4d4c62a77de3df$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $be4d4c62a77de3df$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $be4d4c62a77de3df$exports[key];
        }
    });
});
var $cb4c7f6ebd918fa4$exports = {};

$parcel$export($cb4c7f6ebd918fa4$exports, "previousSunday", () => $cb4c7f6ebd918fa4$export$7d3d7d8fc5e81fd4, (v) => $cb4c7f6ebd918fa4$export$7d3d7d8fc5e81fd4 = v);
var $cb4c7f6ebd918fa4$export$7d3d7d8fc5e81fd4;
"use strict";
$cb4c7f6ebd918fa4$export$7d3d7d8fc5e81fd4 = $cb4c7f6ebd918fa4$var$previousSunday;

/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Sunday
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */ function $cb4c7f6ebd918fa4$var$previousSunday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 0);
}


Object.keys($cb4c7f6ebd918fa4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $cb4c7f6ebd918fa4$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $cb4c7f6ebd918fa4$exports[key];
        }
    });
});
var $189eeca7d4f49d5d$exports = {};

$parcel$export($189eeca7d4f49d5d$exports, "previousThursday", () => $189eeca7d4f49d5d$export$1975b5b1f6b0e34e, (v) => $189eeca7d4f49d5d$export$1975b5b1f6b0e34e = v);
var $189eeca7d4f49d5d$export$1975b5b1f6b0e34e;
"use strict";
$189eeca7d4f49d5d$export$1975b5b1f6b0e34e = $189eeca7d4f49d5d$var$previousThursday;

/**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Thursday
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */ function $189eeca7d4f49d5d$var$previousThursday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 4);
}


Object.keys($189eeca7d4f49d5d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $189eeca7d4f49d5d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $189eeca7d4f49d5d$exports[key];
        }
    });
});
var $c7061c2a322b5118$exports = {};

$parcel$export($c7061c2a322b5118$exports, "previousTuesday", () => $c7061c2a322b5118$export$a034a75f093bcfaf, (v) => $c7061c2a322b5118$export$a034a75f093bcfaf = v);
var $c7061c2a322b5118$export$a034a75f093bcfaf;
"use strict";
$c7061c2a322b5118$export$a034a75f093bcfaf = $c7061c2a322b5118$var$previousTuesday;

/**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Tuesday
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */ function $c7061c2a322b5118$var$previousTuesday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 2);
}


Object.keys($c7061c2a322b5118$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c7061c2a322b5118$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c7061c2a322b5118$exports[key];
        }
    });
});
var $750738092920d631$exports = {};

$parcel$export($750738092920d631$exports, "previousWednesday", () => $750738092920d631$export$26334f591e4ce672, (v) => $750738092920d631$export$26334f591e4ce672 = v);
var $750738092920d631$export$26334f591e4ce672;
"use strict";
$750738092920d631$export$26334f591e4ce672 = $750738092920d631$var$previousWednesday;

/**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The previous Wednesday
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */ function $750738092920d631$var$previousWednesday(date) {
    return (0, $52353a762e71081e$export$4caccb62df4eacc0)(date, 3);
}


Object.keys($750738092920d631$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $750738092920d631$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $750738092920d631$exports[key];
        }
    });
});
var $3b001f833e3dbfba$exports = {};

$parcel$export($3b001f833e3dbfba$exports, "quartersToMonths", () => $3b001f833e3dbfba$export$a29d19ce21d74c57, (v) => $3b001f833e3dbfba$export$a29d19ce21d74c57 = v);
var $3b001f833e3dbfba$export$a29d19ce21d74c57;
"use strict";
$3b001f833e3dbfba$export$a29d19ce21d74c57 = $3b001f833e3dbfba$var$quartersToMonths;

/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in months
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */ function $3b001f833e3dbfba$var$quartersToMonths(quarters) {
    return Math.trunc(quarters * $14ce387571ca9ade$export$3c58128db900d44e);
}


Object.keys($3b001f833e3dbfba$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3b001f833e3dbfba$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3b001f833e3dbfba$exports[key];
        }
    });
});
var $d870f2de5e40ad49$exports = {};

$parcel$export($d870f2de5e40ad49$exports, "quartersToYears", () => $d870f2de5e40ad49$export$c309fa8f184b4648, (v) => $d870f2de5e40ad49$export$c309fa8f184b4648 = v);
var $d870f2de5e40ad49$export$c309fa8f184b4648;
"use strict";
$d870f2de5e40ad49$export$c309fa8f184b4648 = $d870f2de5e40ad49$var$quartersToYears;

/**
 * @name quartersToYears
 * @category Conversion Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert a number of quarters to a full number of years.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in years
 *
 * @example
 * // Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = quartersToYears(11)
 * //=> 2
 */ function $d870f2de5e40ad49$var$quartersToYears(quarters) {
    const years = quarters / $14ce387571ca9ade$export$4db7641526e3241f;
    return Math.trunc(years);
}


Object.keys($d870f2de5e40ad49$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d870f2de5e40ad49$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d870f2de5e40ad49$exports[key];
        }
    });
});
var $0a78352da76173c6$exports = {};

$parcel$export($0a78352da76173c6$exports, "roundToNearestHours", () => $0a78352da76173c6$export$a8b87649ebc0e3c2, (v) => $0a78352da76173c6$export$a8b87649ebc0e3c2 = v);
var $0a78352da76173c6$export$a8b87649ebc0e3c2;
"use strict";
$0a78352da76173c6$export$a8b87649ebc0e3c2 = $0a78352da76173c6$var$roundToNearestHours;



/**
 * The {@link roundToNearestHours} function options.
 */ /**
 * @name roundToNearestHours
 * @category Hour Helpers
 * @summary Rounds the given date to the nearest hour
 *
 * @description
 * Rounds the given date to the nearest hour (or number of hours).
 * Rounds up when the given date is exactly between the nearest round hours.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest hour
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56))
 * //=> Thu Jul 10 2014 13:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 6 })
 * //=> Thu Jul 10 2014 12:00:00

 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 8 })
 * //=> Thu Jul 10 2014 16:00:00

* @example
 * // Floor (rounds down) 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), { roundingMethod: 'ceil' })
 * //=> Thu Jul 10 2014 02:00:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:34:56 to nearest quarter hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { roundingMethod: 'floor', nearestTo: 8 })
 * //=> Thu Jul 10 2014 08:00:00
 */ function $0a78352da76173c6$var$roundToNearestHours(date, options) {
    const nearestTo = options?.nearestTo ?? 1;
    if (nearestTo < 1 || nearestTo > 12) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const fractionalMinutes = _date.getMinutes() / 60;
    const fractionalSeconds = _date.getSeconds() / 60 / 60;
    const fractionalMilliseconds = _date.getMilliseconds() / 1000 / 60 / 60;
    const hours = _date.getHours() + fractionalMinutes + fractionalSeconds + fractionalMilliseconds;
    // Unlike the `differenceIn*` functions, the default rounding behavior is `round` and not 'trunc'
    const method = options?.roundingMethod ?? "round";
    const roundingMethod = (0, $394bd602f4a92376$export$b6474a47258c1211)(method);
    // nearestTo option does not care daylight savings time
    const roundedHours = roundingMethod(hours / nearestTo) * nearestTo;
    const result = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, _date);
    result.setHours(roundedHours, 0, 0, 0);
    return result;
}


Object.keys($0a78352da76173c6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0a78352da76173c6$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0a78352da76173c6$exports[key];
        }
    });
});
var $69d7276c5031f682$exports = {};

$parcel$export($69d7276c5031f682$exports, "roundToNearestMinutes", () => $69d7276c5031f682$export$d97410bb8cd0dff, (v) => $69d7276c5031f682$export$d97410bb8cd0dff = v);
var $69d7276c5031f682$export$d97410bb8cd0dff;
"use strict";
$69d7276c5031f682$export$d97410bb8cd0dff = $69d7276c5031f682$var$roundToNearestMinutes;



/**
 * The {@link roundToNearestMinutes} function options.
 */ /**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest minute
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * //=> Thu Jul 10 2014 12:15:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'floor' })
 * //=> Thu Jul 10 2014 12:12:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:12:34 to nearest half hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'ceil', nearestTo: 30 })
 * //=> Thu Jul 10 2014 12:30:00
 */ function $69d7276c5031f682$var$roundToNearestMinutes(date, options) {
    const nearestTo = options?.nearestTo ?? 1;
    if (nearestTo < 1 || nearestTo > 30) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const fractionalSeconds = _date.getSeconds() / 60;
    const fractionalMilliseconds = _date.getMilliseconds() / 1000 / 60;
    const minutes = _date.getMinutes() + fractionalSeconds + fractionalMilliseconds;
    // Unlike the `differenceIn*` functions, the default rounding behavior is `round` and not 'trunc'
    const method = options?.roundingMethod ?? "round";
    const roundingMethod = (0, $394bd602f4a92376$export$b6474a47258c1211)(method);
    const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
    const result = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, _date);
    result.setMinutes(roundedMinutes, 0, 0);
    return result;
}


Object.keys($69d7276c5031f682$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $69d7276c5031f682$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $69d7276c5031f682$exports[key];
        }
    });
});
var $c52872e3a90e217a$exports = {};

$parcel$export($c52872e3a90e217a$exports, "secondsToHours", () => $c52872e3a90e217a$export$47d555ff5354096f, (v) => $c52872e3a90e217a$export$47d555ff5354096f = v);
var $c52872e3a90e217a$export$47d555ff5354096f;
"use strict";
$c52872e3a90e217a$export$47d555ff5354096f = $c52872e3a90e217a$var$secondsToHours;

/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in hours
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */ function $c52872e3a90e217a$var$secondsToHours(seconds) {
    const hours = seconds / $14ce387571ca9ade$export$698aec755e92c695;
    return Math.trunc(hours);
}


Object.keys($c52872e3a90e217a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c52872e3a90e217a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c52872e3a90e217a$exports[key];
        }
    });
});
var $c89e9043ef0c2810$exports = {};

$parcel$export($c89e9043ef0c2810$exports, "secondsToMilliseconds", () => $c89e9043ef0c2810$export$fc3e7e8557f8c8c7, (v) => $c89e9043ef0c2810$export$fc3e7e8557f8c8c7 = v);
var $c89e9043ef0c2810$export$fc3e7e8557f8c8c7;
"use strict";
$c89e9043ef0c2810$export$fc3e7e8557f8c8c7 = $c89e9043ef0c2810$var$secondsToMilliseconds;

/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in milliseconds
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */ function $c89e9043ef0c2810$var$secondsToMilliseconds(seconds) {
    return seconds * $14ce387571ca9ade$export$397c2d5776aa9055;
}


Object.keys($c89e9043ef0c2810$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $c89e9043ef0c2810$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $c89e9043ef0c2810$exports[key];
        }
    });
});
var $25c428c06410c54a$exports = {};

$parcel$export($25c428c06410c54a$exports, "secondsToMinutes", () => $25c428c06410c54a$export$ed657adb62398e99, (v) => $25c428c06410c54a$export$ed657adb62398e99 = v);
var $25c428c06410c54a$export$ed657adb62398e99;
"use strict";
$25c428c06410c54a$export$ed657adb62398e99 = $25c428c06410c54a$var$secondsToMinutes;

/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in minutes
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */ function $25c428c06410c54a$var$secondsToMinutes(seconds) {
    const minutes = seconds / $14ce387571ca9ade$export$a77c1a7ebebe2a5a;
    return Math.trunc(minutes);
}


Object.keys($25c428c06410c54a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $25c428c06410c54a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $25c428c06410c54a$exports[key];
        }
    });
});
var $4450bb9d89f7cfac$exports = {};

$parcel$export($4450bb9d89f7cfac$exports, "set", () => $4450bb9d89f7cfac$export$adaa4cf7ef1b65be, (v) => $4450bb9d89f7cfac$export$adaa4cf7ef1b65be = v);
var $4450bb9d89f7cfac$export$adaa4cf7ef1b65be;
"use strict";
$4450bb9d89f7cfac$export$adaa4cf7ef1b65be = $4450bb9d89f7cfac$var$set;

var $d707d6113ca157a7$exports = {};

$parcel$export($d707d6113ca157a7$exports, "setMonth", () => $d707d6113ca157a7$export$63264690f8e36790, (v) => $d707d6113ca157a7$export$63264690f8e36790 = v);
var $d707d6113ca157a7$export$63264690f8e36790;
"use strict";
$d707d6113ca157a7$export$63264690f8e36790 = $d707d6113ca157a7$var$setMonth;



/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */ function $d707d6113ca157a7$var$setMonth(date, month) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const day = _date.getDate();
    const dateWithDesiredMonth = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    dateWithDesiredMonth.setFullYear(year, month, 15);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    const daysInMonth = (0, $9ace231e9e50a89b$export$f645ddd439eb259d)(dateWithDesiredMonth);
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    _date.setMonth(month, Math.min(day, daysInMonth));
    return _date;
}



/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */ function $4450bb9d89f7cfac$var$set(date, values) {
    let _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(+_date)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    if (values.year != null) _date.setFullYear(values.year);
    if (values.month != null) _date = (0, $d707d6113ca157a7$export$63264690f8e36790)(_date, values.month);
    if (values.date != null) _date.setDate(values.date);
    if (values.hours != null) _date.setHours(values.hours);
    if (values.minutes != null) _date.setMinutes(values.minutes);
    if (values.seconds != null) _date.setSeconds(values.seconds);
    if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
    return _date;
}


Object.keys($4450bb9d89f7cfac$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4450bb9d89f7cfac$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4450bb9d89f7cfac$exports[key];
        }
    });
});
var $b555254951e540bb$exports = {};

$parcel$export($b555254951e540bb$exports, "setDate", () => $b555254951e540bb$export$566174fa40823587, (v) => $b555254951e540bb$export$566174fa40823587 = v);
var $b555254951e540bb$export$566174fa40823587;
"use strict";
$b555254951e540bb$export$566174fa40823587 = $b555254951e540bb$var$setDate;

/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param dayOfMonth - The day of the month of the new date
 *
 * @returns The new date with the day of the month set
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * const result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */ function $b555254951e540bb$var$setDate(date, dayOfMonth) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setDate(dayOfMonth);
    return _date;
}


Object.keys($b555254951e540bb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b555254951e540bb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b555254951e540bb$exports[key];
        }
    });
});

Object.keys($97a42d59cb3d4a33$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $97a42d59cb3d4a33$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $97a42d59cb3d4a33$exports[key];
        }
    });
});
var $82498c0244e50cee$exports = {};

$parcel$export($82498c0244e50cee$exports, "setDayOfYear", () => $82498c0244e50cee$export$2af590ffc7e7d7c5, (v) => $82498c0244e50cee$export$2af590ffc7e7d7c5 = v);
var $82498c0244e50cee$export$2af590ffc7e7d7c5;
"use strict";
$82498c0244e50cee$export$2af590ffc7e7d7c5 = $82498c0244e50cee$var$setDayOfYear;

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param dayOfYear - The day of the year of the new date
 *
 * @returns The new date with the day of the year set
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * const result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */ function $82498c0244e50cee$var$setDayOfYear(date, dayOfYear) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMonth(0);
    _date.setDate(dayOfYear);
    return _date;
}


Object.keys($82498c0244e50cee$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $82498c0244e50cee$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $82498c0244e50cee$exports[key];
        }
    });
});
var $4f72808dbc89428a$exports = {};

$parcel$export($4f72808dbc89428a$exports, "setDefaultOptions", () => $4f72808dbc89428a$export$95365be1b0704abc, (v) => $4f72808dbc89428a$export$95365be1b0704abc = v);
var $4f72808dbc89428a$export$95365be1b0704abc;
"use strict";
$4f72808dbc89428a$export$95365be1b0704abc = $4f72808dbc89428a$var$setDefaultOptions;

/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default options including locale.
 * @pure false
 *
 * @description
 * Sets the defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * @param options - An object with options
 *
 * @example
 * // Set global locale:
 * import { es } from 'date-fns/locale'
 * setDefaultOptions({ locale: es })
 * const result = format(new Date(2014, 8, 2), 'PPPP')
 * //=> 'martes, 2 de septiembre de 2014'
 *
 * @example
 * // Start of the week for 2 September 2014:
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Start of the week for 2 September 2014,
 * // when we set that week starts on Monday by default:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Mon Sep 01 2014 00:00:00
 *
 * @example
 * // Manually set options take priority over default options:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Remove the option by setting it to `undefined`:
 * setDefaultOptions({ weekStartsOn: 1 })
 * setDefaultOptions({ weekStartsOn: undefined })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 */ function $4f72808dbc89428a$var$setDefaultOptions(options) {
    const result = {};
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    for(const property in defaultOptions)if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    result[property] = defaultOptions[property];
    for(const property in options)if (Object.prototype.hasOwnProperty.call(options, property)) {
        if (options[property] === undefined) // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        delete result[property];
        else // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        result[property] = options[property];
    }
    (0, $bdae7381d85d289e$export$95365be1b0704abc)(result);
}


Object.keys($4f72808dbc89428a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $4f72808dbc89428a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $4f72808dbc89428a$exports[key];
        }
    });
});
var $eda40633a1eb49cb$exports = {};

$parcel$export($eda40633a1eb49cb$exports, "setHours", () => $eda40633a1eb49cb$export$f86b797a4659b781, (v) => $eda40633a1eb49cb$export$f86b797a4659b781 = v);
var $eda40633a1eb49cb$export$f86b797a4659b781;
"use strict";
$eda40633a1eb49cb$export$f86b797a4659b781 = $eda40633a1eb49cb$var$setHours;

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param hours - The hours of the new date
 *
 * @returns The new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */ function $eda40633a1eb49cb$var$setHours(date, hours) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setHours(hours);
    return _date;
}


Object.keys($eda40633a1eb49cb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $eda40633a1eb49cb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $eda40633a1eb49cb$exports[key];
        }
    });
});

Object.keys($7e19aac5a454908c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7e19aac5a454908c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7e19aac5a454908c$exports[key];
        }
    });
});

Object.keys($eedf8e4ff0786614$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $eedf8e4ff0786614$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $eedf8e4ff0786614$exports[key];
        }
    });
});

Object.keys($9941f4bf91b30929$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9941f4bf91b30929$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9941f4bf91b30929$exports[key];
        }
    });
});
var $18478e661a6e6f17$exports = {};

$parcel$export($18478e661a6e6f17$exports, "setMilliseconds", () => $18478e661a6e6f17$export$de5664029b35e06d, (v) => $18478e661a6e6f17$export$de5664029b35e06d = v);
var $18478e661a6e6f17$export$de5664029b35e06d;
"use strict";
$18478e661a6e6f17$export$de5664029b35e06d = $18478e661a6e6f17$var$setMilliseconds;

/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param milliseconds - The milliseconds of the new date
 *
 * @returns The new date with the milliseconds set
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */ function $18478e661a6e6f17$var$setMilliseconds(date, milliseconds) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMilliseconds(milliseconds);
    return _date;
}


Object.keys($18478e661a6e6f17$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $18478e661a6e6f17$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $18478e661a6e6f17$exports[key];
        }
    });
});
var $441106b7ec488792$exports = {};

$parcel$export($441106b7ec488792$exports, "setMinutes", () => $441106b7ec488792$export$ad569bf1c79ea89d, (v) => $441106b7ec488792$export$ad569bf1c79ea89d = v);
var $441106b7ec488792$export$ad569bf1c79ea89d;
"use strict";
$441106b7ec488792$export$ad569bf1c79ea89d = $441106b7ec488792$var$setMinutes;

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */ function $441106b7ec488792$var$setMinutes(date, minutes) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setMinutes(minutes);
    return _date;
}


Object.keys($441106b7ec488792$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $441106b7ec488792$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $441106b7ec488792$exports[key];
        }
    });
});

Object.keys($d707d6113ca157a7$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d707d6113ca157a7$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d707d6113ca157a7$exports[key];
        }
    });
});
var $168a760c08af826f$exports = {};

$parcel$export($168a760c08af826f$exports, "setQuarter", () => $168a760c08af826f$export$8924d1de7efe1755, (v) => $168a760c08af826f$export$8924d1de7efe1755 = v);
var $168a760c08af826f$export$8924d1de7efe1755;
"use strict";
$168a760c08af826f$export$8924d1de7efe1755 = $168a760c08af826f$var$setQuarter;


/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param quarter - The quarter of the new date
 *
 * @returns The new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */ function $168a760c08af826f$var$setQuarter(date, quarter) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const oldQuarter = Math.trunc(_date.getMonth() / 3) + 1;
    const diff = quarter - oldQuarter;
    return (0, $d707d6113ca157a7$export$63264690f8e36790)(_date, _date.getMonth() + diff * 3);
}


Object.keys($168a760c08af826f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $168a760c08af826f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $168a760c08af826f$exports[key];
        }
    });
});
var $bfa676a3796791a5$exports = {};

$parcel$export($bfa676a3796791a5$exports, "setSeconds", () => $bfa676a3796791a5$export$aec44746644cbf43, (v) => $bfa676a3796791a5$export$aec44746644cbf43 = v);
var $bfa676a3796791a5$export$aec44746644cbf43;
"use strict";
$bfa676a3796791a5$export$aec44746644cbf43 = $bfa676a3796791a5$var$setSeconds;

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param seconds - The seconds of the new date
 *
 * @returns The new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */ function $bfa676a3796791a5$var$setSeconds(date, seconds) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    _date.setSeconds(seconds);
    return _date;
}


Object.keys($bfa676a3796791a5$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $bfa676a3796791a5$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $bfa676a3796791a5$exports[key];
        }
    });
});

Object.keys($3ec7f33bd38f385f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $3ec7f33bd38f385f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $3ec7f33bd38f385f$exports[key];
        }
    });
});
var $53f36a039a1cd25a$exports = {};

$parcel$export($53f36a039a1cd25a$exports, "setWeekYear", () => $53f36a039a1cd25a$export$4340968d5939835e, (v) => $53f36a039a1cd25a$export$4340968d5939835e = v);
var $53f36a039a1cd25a$export$4340968d5939835e;
"use strict";
$53f36a039a1cd25a$export$4340968d5939835e = $53f36a039a1cd25a$var$setWeekYear;





/**
 * The {@link setWeekYear} function options.
 */ /**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param weekYear - The local week-numbering year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week-numbering year set
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * const result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = setWeekYear(new Date(2010, 0, 2), 2004, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sat Jan 01 2005 00:00:00
 */ function $53f36a039a1cd25a$var$setWeekYear(date, weekYear, options) {
    const defaultOptions = (0, $bdae7381d85d289e$export$430a3269e24b912e)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    let _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const diff = (0, $f4468be34bc84842$export$4a02e9c37dab4871)(_date, (0, $f7ace184d5d2a175$export$bb7b45bb8e74da0f)(_date, options));
    const firstWeek = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, 0);
    firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    _date = (0, $f7ace184d5d2a175$export$bb7b45bb8e74da0f)(firstWeek, options);
    _date.setDate(_date.getDate() + diff);
    return _date;
}


Object.keys($53f36a039a1cd25a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $53f36a039a1cd25a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $53f36a039a1cd25a$exports[key];
        }
    });
});
var $7e927f9e6724642d$exports = {};

$parcel$export($7e927f9e6724642d$exports, "setYear", () => $7e927f9e6724642d$export$a8408b6c5639cab7, (v) => $7e927f9e6724642d$export$a8408b6c5639cab7 = v);
var $7e927f9e6724642d$export$a8408b6c5639cab7;
"use strict";
$7e927f9e6724642d$export$a8408b6c5639cab7 = $7e927f9e6724642d$var$setYear;


/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */ function $7e927f9e6724642d$var$setYear(date, year) {
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(+_date)) return (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, NaN);
    _date.setFullYear(year);
    return _date;
}


Object.keys($7e927f9e6724642d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $7e927f9e6724642d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $7e927f9e6724642d$exports[key];
        }
    });
});

Object.keys($bfe4adcc49a56248$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $bfe4adcc49a56248$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $bfe4adcc49a56248$exports[key];
        }
    });
});
var $54a6f00108412273$exports = {};

$parcel$export($54a6f00108412273$exports, "startOfDecade", () => $54a6f00108412273$export$730492981c634308, (v) => $54a6f00108412273$export$730492981c634308 = v);
var $54a6f00108412273$export$730492981c634308;
"use strict";
$54a6f00108412273$export$730492981c634308 = $54a6f00108412273$var$startOfDecade;

/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a decade
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */ function $54a6f00108412273$var$startOfDecade(date) {
    // TODO: Switch to more technical definition in of decades that start with 1
    // end with 0. I.e. 2001-2010 instead of current 2000-2009. It's a breaking
    // change, so it can only be done in 4.0.
    const _date = (0, $d6ca5188bd94f9d4$export$e67a095c620b86fe)(date);
    const year = _date.getFullYear();
    const decade = Math.floor(year / 10) * 10;
    _date.setFullYear(decade, 0, 1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}


Object.keys($54a6f00108412273$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $54a6f00108412273$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $54a6f00108412273$exports[key];
        }
    });
});

Object.keys($0b3bcfe0f0faadb3$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0b3bcfe0f0faadb3$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0b3bcfe0f0faadb3$exports[key];
        }
    });
});

Object.keys($a0788919f0f9c7eb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a0788919f0f9c7eb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a0788919f0f9c7eb$exports[key];
        }
    });
});

Object.keys($18db251bc9893458$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $18db251bc9893458$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $18db251bc9893458$exports[key];
        }
    });
});

Object.keys($51de6ba3eb1d8195$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $51de6ba3eb1d8195$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $51de6ba3eb1d8195$exports[key];
        }
    });
});

Object.keys($1dd0db739263b27f$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1dd0db739263b27f$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1dd0db739263b27f$exports[key];
        }
    });
});

Object.keys($8964f19f14b70eeb$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8964f19f14b70eeb$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8964f19f14b70eeb$exports[key];
        }
    });
});

Object.keys($5dc9fbe1faec88b1$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $5dc9fbe1faec88b1$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $5dc9fbe1faec88b1$exports[key];
        }
    });
});
var $0c80381c1ab5234d$exports = {};

$parcel$export($0c80381c1ab5234d$exports, "startOfToday", () => $0c80381c1ab5234d$export$444d742fd5a45a57, (v) => $0c80381c1ab5234d$export$444d742fd5a45a57 = v);
var $0c80381c1ab5234d$export$444d742fd5a45a57;
"use strict";
$0c80381c1ab5234d$export$444d742fd5a45a57 = $0c80381c1ab5234d$var$startOfToday;

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */ function $0c80381c1ab5234d$var$startOfToday() {
    return (0, $bfe4adcc49a56248$export$63fa379ae8a9ba2)(Date.now());
}


Object.keys($0c80381c1ab5234d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $0c80381c1ab5234d$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $0c80381c1ab5234d$exports[key];
        }
    });
});
var $db98d129ca6e5b25$exports = {};

$parcel$export($db98d129ca6e5b25$exports, "startOfTomorrow", () => $db98d129ca6e5b25$export$7e8566c79d5bee07, (v) => $db98d129ca6e5b25$export$7e8566c79d5bee07 = v);
var $db98d129ca6e5b25$export$7e8566c79d5bee07;
"use strict";
$db98d129ca6e5b25$export$7e8566c79d5bee07 = $db98d129ca6e5b25$var$startOfTomorrow; /**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns The start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */ 
function $db98d129ca6e5b25$var$startOfTomorrow() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = new Date(0);
    date.setFullYear(year, month, day + 1);
    date.setHours(0, 0, 0, 0);
    return date;
}


Object.keys($db98d129ca6e5b25$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $db98d129ca6e5b25$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $db98d129ca6e5b25$exports[key];
        }
    });
});

Object.keys($ece5c05ada93e803$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $ece5c05ada93e803$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $ece5c05ada93e803$exports[key];
        }
    });
});

Object.keys($f7ace184d5d2a175$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $f7ace184d5d2a175$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $f7ace184d5d2a175$exports[key];
        }
    });
});

Object.keys($99ecdc9e93b501d0$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $99ecdc9e93b501d0$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $99ecdc9e93b501d0$exports[key];
        }
    });
});
var $8b5e5cb11ed30ff9$exports = {};

$parcel$export($8b5e5cb11ed30ff9$exports, "startOfYesterday", () => $8b5e5cb11ed30ff9$export$23a16f3c6d143ce9, (v) => $8b5e5cb11ed30ff9$export$23a16f3c6d143ce9 = v);
var $8b5e5cb11ed30ff9$export$23a16f3c6d143ce9;
"use strict";
$8b5e5cb11ed30ff9$export$23a16f3c6d143ce9 = $8b5e5cb11ed30ff9$var$startOfYesterday; /**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns The start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */ 
function $8b5e5cb11ed30ff9$var$startOfYesterday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
}


Object.keys($8b5e5cb11ed30ff9$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8b5e5cb11ed30ff9$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8b5e5cb11ed30ff9$exports[key];
        }
    });
});
var $51cede4b78b0053c$exports = {};

$parcel$export($51cede4b78b0053c$exports, "sub", () => $51cede4b78b0053c$export$f93b5905241a7cca, (v) => $51cede4b78b0053c$export$f93b5905241a7cca = v);
var $51cede4b78b0053c$export$f93b5905241a7cca;
"use strict";
$51cede4b78b0053c$export$f93b5905241a7cca = $51cede4b78b0053c$var$sub;

var $6e687c81fe361fde$exports = {};

$parcel$export($6e687c81fe361fde$exports, "subMonths", () => $6e687c81fe361fde$export$73d1c15a21f9fae5, (v) => $6e687c81fe361fde$export$73d1c15a21f9fae5 = v);
var $6e687c81fe361fde$export$73d1c15a21f9fae5;
"use strict";
$6e687c81fe361fde$export$73d1c15a21f9fae5 = $6e687c81fe361fde$var$subMonths;

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */ function $6e687c81fe361fde$var$subMonths(date, amount) {
    return (0, $e2a3756ff857361a$export$17c93e242b2d3a22)(date, -amount);
}



/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */ function $51cede4b78b0053c$var$sub(date, duration) {
    const { years: years = 0, months: months = 0, weeks: weeks = 0, days: days = 0, hours: hours = 0, minutes: minutes = 0, seconds: seconds = 0 } = duration;
    // Subtract years and months
    const dateWithoutMonths = (0, $6e687c81fe361fde$export$73d1c15a21f9fae5)(date, months + years * 12);
    // Subtract weeks and days
    const dateWithoutDays = (0, $a61e1fbf42d5080c$export$70823084e2deb1ea)(dateWithoutMonths, days + weeks * 7);
    // Subtract hours, minutes and seconds
    const minutestoSub = minutes + hours * 60;
    const secondstoSub = seconds + minutestoSub * 60;
    const mstoSub = secondstoSub * 1000;
    const finalDate = (0, $8079cc2f427f92af$export$ead8a1812b171991)(date, dateWithoutDays.getTime() - mstoSub);
    return finalDate;
}


Object.keys($51cede4b78b0053c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $51cede4b78b0053c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $51cede4b78b0053c$exports[key];
        }
    });
});
var $1b15501fc0d3a48a$exports = {};

$parcel$export($1b15501fc0d3a48a$exports, "subBusinessDays", () => $1b15501fc0d3a48a$export$e5cc51ae28664a93, (v) => $1b15501fc0d3a48a$export$e5cc51ae28664a93 = v);
var $1b15501fc0d3a48a$export$e5cc51ae28664a93;
"use strict";
$1b15501fc0d3a48a$export$e5cc51ae28664a93 = $1b15501fc0d3a48a$var$subBusinessDays;

/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Substract the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Substract the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be subtracted.
 *
 * @returns The new date with the business days subtracted
 *
 * @example
 * // Substract 10 business days from 1 September 2014:
 * const result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */ function $1b15501fc0d3a48a$var$subBusinessDays(date, amount) {
    return (0, $4fc6464b8d09c3e7$export$f087b9ada3136ae9)(date, -amount);
}


Object.keys($1b15501fc0d3a48a$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1b15501fc0d3a48a$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1b15501fc0d3a48a$exports[key];
        }
    });
});

Object.keys($a61e1fbf42d5080c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $a61e1fbf42d5080c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $a61e1fbf42d5080c$exports[key];
        }
    });
});
var $fb4feb5e2cfc7799$exports = {};

$parcel$export($fb4feb5e2cfc7799$exports, "subHours", () => $fb4feb5e2cfc7799$export$5e9fa51cd5bb1e71, (v) => $fb4feb5e2cfc7799$export$5e9fa51cd5bb1e71 = v);
var $fb4feb5e2cfc7799$export$5e9fa51cd5bb1e71;
"use strict";
$fb4feb5e2cfc7799$export$5e9fa51cd5bb1e71 = $fb4feb5e2cfc7799$var$subHours;

/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be subtracted.
 *
 * @returns The new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */ function $fb4feb5e2cfc7799$var$subHours(date, amount) {
    return (0, $d144a8e63ad6ffd7$export$4a4306ad4fa0e5e6)(date, -amount);
}


Object.keys($fb4feb5e2cfc7799$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $fb4feb5e2cfc7799$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $fb4feb5e2cfc7799$exports[key];
        }
    });
});

Object.keys($fc7a564e8f389d76$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $fc7a564e8f389d76$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $fc7a564e8f389d76$exports[key];
        }
    });
});
var $275d46e20a1b668e$exports = {};

$parcel$export($275d46e20a1b668e$exports, "subMilliseconds", () => $275d46e20a1b668e$export$5abaf57ab8e91640, (v) => $275d46e20a1b668e$export$5abaf57ab8e91640 = v);
var $275d46e20a1b668e$export$5abaf57ab8e91640;
"use strict";
$275d46e20a1b668e$export$5abaf57ab8e91640 = $275d46e20a1b668e$var$subMilliseconds;

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be subtracted.
 *
 * @returns The new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */ function $275d46e20a1b668e$var$subMilliseconds(date, amount) {
    return (0, $1bfcccd7bade19ee$export$baf757aaf0c95c94)(date, -amount);
}


Object.keys($275d46e20a1b668e$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $275d46e20a1b668e$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $275d46e20a1b668e$exports[key];
        }
    });
});
var $83ce20f7a731ceb2$exports = {};

$parcel$export($83ce20f7a731ceb2$exports, "subMinutes", () => $83ce20f7a731ceb2$export$e12a970efb73fce5, (v) => $83ce20f7a731ceb2$export$e12a970efb73fce5 = v);
var $83ce20f7a731ceb2$export$e12a970efb73fce5;
"use strict";
$83ce20f7a731ceb2$export$e12a970efb73fce5 = $83ce20f7a731ceb2$var$subMinutes;

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be subtracted.
 *
 * @returns The new date with the minutes subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */ function $83ce20f7a731ceb2$var$subMinutes(date, amount) {
    return (0, $79d244f57af1182c$export$2287e3d29250119e)(date, -amount);
}


Object.keys($83ce20f7a731ceb2$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $83ce20f7a731ceb2$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $83ce20f7a731ceb2$exports[key];
        }
    });
});

Object.keys($6e687c81fe361fde$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $6e687c81fe361fde$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $6e687c81fe361fde$exports[key];
        }
    });
});
var $b7ddbd1760ce6031$exports = {};

$parcel$export($b7ddbd1760ce6031$exports, "subQuarters", () => $b7ddbd1760ce6031$export$a31bfeeeee80cce6, (v) => $b7ddbd1760ce6031$export$a31bfeeeee80cce6 = v);
var $b7ddbd1760ce6031$export$a31bfeeeee80cce6;
"use strict";
$b7ddbd1760ce6031$export$a31bfeeeee80cce6 = $b7ddbd1760ce6031$var$subQuarters;

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be subtracted.
 *
 * @returns The new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */ function $b7ddbd1760ce6031$var$subQuarters(date, amount) {
    return (0, $6b82cd1131386c75$export$c252a41d0fbed2ce)(date, -amount);
}


Object.keys($b7ddbd1760ce6031$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $b7ddbd1760ce6031$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $b7ddbd1760ce6031$exports[key];
        }
    });
});
var $42d8f4e53748a08c$exports = {};

$parcel$export($42d8f4e53748a08c$exports, "subSeconds", () => $42d8f4e53748a08c$export$e95d8ad9981db689, (v) => $42d8f4e53748a08c$export$e95d8ad9981db689 = v);
var $42d8f4e53748a08c$export$e95d8ad9981db689;
"use strict";
$42d8f4e53748a08c$export$e95d8ad9981db689 = $42d8f4e53748a08c$var$subSeconds;

/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of seconds to be subtracted.
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */ function $42d8f4e53748a08c$var$subSeconds(date, amount) {
    return (0, $4305a0c0eee23ec5$export$3cb31b0df13be68)(date, -amount);
}


Object.keys($42d8f4e53748a08c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $42d8f4e53748a08c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $42d8f4e53748a08c$exports[key];
        }
    });
});
var $1764b19a967d1a7c$exports = {};

$parcel$export($1764b19a967d1a7c$exports, "subWeeks", () => $1764b19a967d1a7c$export$b4d8ae6376193efb, (v) => $1764b19a967d1a7c$export$b4d8ae6376193efb = v);
var $1764b19a967d1a7c$export$b4d8ae6376193efb;
"use strict";
$1764b19a967d1a7c$export$b4d8ae6376193efb = $1764b19a967d1a7c$var$subWeeks;

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be subtracted.
 *
 * @returns The new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */ function $1764b19a967d1a7c$var$subWeeks(date, amount) {
    return (0, $24685c5ea669773d$export$ef501a2bb4f3ee6b)(date, -amount);
}


Object.keys($1764b19a967d1a7c$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $1764b19a967d1a7c$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $1764b19a967d1a7c$exports[key];
        }
    });
});
var $9f3de45665dc8648$exports = {};

$parcel$export($9f3de45665dc8648$exports, "subYears", () => $9f3de45665dc8648$export$14867687ff6c92e2, (v) => $9f3de45665dc8648$export$14867687ff6c92e2 = v);
var $9f3de45665dc8648$export$14867687ff6c92e2;
"use strict";
$9f3de45665dc8648$export$14867687ff6c92e2 = $9f3de45665dc8648$var$subYears;

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be subtracted.
 *
 * @returns The new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */ function $9f3de45665dc8648$var$subYears(date, amount) {
    return (0, $2c6a0cda03bac7ae$export$3d83eec43f4ea476)(date, -amount);
}


Object.keys($9f3de45665dc8648$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $9f3de45665dc8648$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $9f3de45665dc8648$exports[key];
        }
    });
});

Object.keys($d6ca5188bd94f9d4$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $d6ca5188bd94f9d4$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $d6ca5188bd94f9d4$exports[key];
        }
    });
});

Object.keys($8bd67f70f18caec8$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $8bd67f70f18caec8$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $8bd67f70f18caec8$exports[key];
        }
    });
});
var $6b78e3b5fdedad52$exports = {};

$parcel$export($6b78e3b5fdedad52$exports, "weeksToDays", () => $6b78e3b5fdedad52$export$b696b6eeb89501ad, (v) => $6b78e3b5fdedad52$export$b696b6eeb89501ad = v);
var $6b78e3b5fdedad52$export$b696b6eeb89501ad;
"use strict";
$6b78e3b5fdedad52$export$b696b6eeb89501ad = $6b78e3b5fdedad52$var$weeksToDays;

/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param weeks - The number of weeks to be converted
 *
 * @returns The number of weeks converted in days
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */ function $6b78e3b5fdedad52$var$weeksToDays(weeks) {
    return Math.trunc(weeks * $14ce387571ca9ade$export$dfd9b671c89acc8e);
}


Object.keys($6b78e3b5fdedad52$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $6b78e3b5fdedad52$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $6b78e3b5fdedad52$exports[key];
        }
    });
});
var $2b5124078dde9aa6$exports = {};

$parcel$export($2b5124078dde9aa6$exports, "yearsToDays", () => $2b5124078dde9aa6$export$862cb7b6e45c3b17, (v) => $2b5124078dde9aa6$export$862cb7b6e45c3b17 = v);
var $2b5124078dde9aa6$export$862cb7b6e45c3b17;
"use strict";
$2b5124078dde9aa6$export$862cb7b6e45c3b17 = $2b5124078dde9aa6$var$yearsToDays;

/**
 * @name yearsToDays
 * @category Conversion Helpers
 * @summary Convert years to days.
 *
 * @description
 * Convert a number of years to a full number of days.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in days
 *
 * @example
 * // Convert 2 years into days
 * const result = yearsToDays(2)
 * //=> 730
 */ function $2b5124078dde9aa6$var$yearsToDays(years) {
    return Math.trunc(years * $14ce387571ca9ade$export$3913210603d8e9ae);
}


Object.keys($2b5124078dde9aa6$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $2b5124078dde9aa6$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $2b5124078dde9aa6$exports[key];
        }
    });
});
var $431106c2444ea494$exports = {};

$parcel$export($431106c2444ea494$exports, "yearsToMonths", () => $431106c2444ea494$export$894abb0747b9a00, (v) => $431106c2444ea494$export$894abb0747b9a00 = v);
var $431106c2444ea494$export$894abb0747b9a00;
"use strict";
$431106c2444ea494$export$894abb0747b9a00 = $431106c2444ea494$var$yearsToMonths;

/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in months
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */ function $431106c2444ea494$var$yearsToMonths(years) {
    return Math.trunc(years * $14ce387571ca9ade$export$80d7e435f744f319);
}


Object.keys($431106c2444ea494$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $431106c2444ea494$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $431106c2444ea494$exports[key];
        }
    });
});
var $552eca8b2c603474$exports = {};

$parcel$export($552eca8b2c603474$exports, "yearsToQuarters", () => $552eca8b2c603474$export$ab26576e5e7379d7, (v) => $552eca8b2c603474$export$ab26576e5e7379d7 = v);
var $552eca8b2c603474$export$ab26576e5e7379d7;
"use strict";
$552eca8b2c603474$export$ab26576e5e7379d7 = $552eca8b2c603474$var$yearsToQuarters;

/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in quarters
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */ function $552eca8b2c603474$var$yearsToQuarters(years) {
    return Math.trunc(years * $14ce387571ca9ade$export$4db7641526e3241f);
}


Object.keys($552eca8b2c603474$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $0482955508687de3$exports && $0482955508687de3$exports[key] === $552eca8b2c603474$exports[key]) return;
    Object.defineProperty($0482955508687de3$exports, key, {
        enumerable: true,
        get: function() {
            return $552eca8b2c603474$exports[key];
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.querySelector(".separator__arrow-button");
    arrow.addEventListener("click", $60eafcd7eea799ef$var$clickFunction);
});
const $60eafcd7eea799ef$var$clickFunction = (e)=>{
    let now = new Date();
    let date = new Date();
    let result = $60eafcd7eea799ef$var$isDateValid(now, date);
    if (result.success) $60eafcd7eea799ef$var$calculateAge(now, result.date);
};
function $60eafcd7eea799ef$var$isDateValid(now, date) {
    const dayId = document.querySelector("#dayId");
    const monthId = document.querySelector("#monthId");
    const yearId = document.querySelector("#yearId");
    //validates each input separately
    let result = $60eafcd7eea799ef$var$ValidateEveryInput(dayId, monthId, yearId, now);
    //if any of the inputs is incorrect return result
    if (!result.success) return result;
    //if each entry is correct, set the date with given data and validate if that date exists in the past
    date.setFullYear(+yearId.value);
    date.setMonth(+monthId.value - 1);
    date.setDate(+dayId.value);
    let isDateCorrect = date.getFullYear() === +yearId.value && date.getMonth() === +monthId.value - 1 && date.getDate() === +dayId.value;
    //the date is incorrect
    if (isNaN(date.getDate()) || !isDateCorrect) {
        $60eafcd7eea799ef$var$addInvalidDateValidation($14308410f8b0e190$export$fdc5644089e8d0dc);
        return {
            success: false
        };
    } else if (!(0, $0482955508687de3$exports.isPast)(date)) {
        $60eafcd7eea799ef$var$addInvalidDateValidation($14308410f8b0e190$export$81b1b52cbeed96fd);
        return {
            success: false
        };
    } else {
        $60eafcd7eea799ef$var$removeAllValidation(dayId, monthId, yearId);
        return {
            success: true,
            date: date
        };
    }
}
function $60eafcd7eea799ef$var$removeAllValidation(dayId, monthId, yearId) {
    $60eafcd7eea799ef$var$removeValidationMessagesAndStyles(dayId);
    $60eafcd7eea799ef$var$removeValidationMessagesAndStyles(monthId);
    $60eafcd7eea799ef$var$removeValidationMessagesAndStyles(yearId);
}
function $60eafcd7eea799ef$var$ValidateEveryInput(dayId, monthId, yearId, now) {
    let isDayCorrect = !!dayId.value && !isNaN(dayId.value) && dayId.value >= 1 && dayId.value <= 31;
    let isMonthCorrect = !!monthId.value && !isNaN(monthId.value) && monthId.value >= 1 && monthId.value <= 12;
    let isYearCorrect = !!yearId.value && !isNaN(yearId.value);
    let isYearInThePast = !!yearId.value && yearId.value <= now.getFullYear();
    let isAnyValidFlag = true;
    isAnyValidFlag = $60eafcd7eea799ef$var$isInputValid(isDayCorrect, !dayId.value, dayId, $14308410f8b0e190$export$558afb482112b4de) && isAnyValidFlag;
    isAnyValidFlag = $60eafcd7eea799ef$var$isInputValid(isMonthCorrect, !monthId.value, monthId, $14308410f8b0e190$export$214d571e21a0e4d1) && isAnyValidFlag;
    isAnyValidFlag = $60eafcd7eea799ef$var$isInputValid(isYearCorrect, !yearId.value, yearId, $14308410f8b0e190$export$deb9a9b25c639598) && isAnyValidFlag;
    isAnyValidFlag = $60eafcd7eea799ef$var$isInputValid(isYearInThePast, !yearId.value, yearId, $14308410f8b0e190$export$81b1b52cbeed96fd) && isAnyValidFlag;
    return {
        success: isAnyValidFlag
    };
}
function $60eafcd7eea799ef$var$addInvalidDateValidation(message) {
    const dayId = document.getElementById("dayId");
    const monthId = document.getElementById("monthId");
    const yearId = document.getElementById("yearId");
    $60eafcd7eea799ef$var$addValidationMessageAndStyles(dayId, message);
    $60eafcd7eea799ef$var$addValidationMessageAndStyles(monthId, $14308410f8b0e190$export$8d34a8e2e1d6bcc1);
    $60eafcd7eea799ef$var$addValidationMessageAndStyles(yearId, $14308410f8b0e190$export$8d34a8e2e1d6bcc1);
}
function $60eafcd7eea799ef$var$isInputValid(isInputCorrect, isInputNull, input, validationMessage) {
    if (!isInputCorrect) {
        if (isInputNull) {
            $60eafcd7eea799ef$var$addValidationMessageAndStyles(input, $14308410f8b0e190$export$854f1880e14a3d0f);
            return false;
        } else {
            $60eafcd7eea799ef$var$addValidationMessageAndStyles(input, validationMessage);
            return false;
        }
    } else {
        $60eafcd7eea799ef$var$removeValidationMessagesAndStyles(input);
        return true;
    }
}
function $60eafcd7eea799ef$var$removeValidationMessagesAndStyles(element) {
    element.style.borderColor = $14308410f8b0e190$export$8d34a8e2e1d6bcc1;
    if (element.nextElementSibling) element.nextElementSibling.textContent = $14308410f8b0e190$export$8d34a8e2e1d6bcc1;
    if (element.previousElementSibling) element.previousElementSibling.style.color = $14308410f8b0e190$export$8d34a8e2e1d6bcc1;
}
function $60eafcd7eea799ef$var$addValidationMessageAndStyles(element, validationMessage) {
    element.style.borderColor = "var(--LightRed)";
    if (element.nextElementSibling) element.nextElementSibling.textContent = validationMessage;
    if (element.previousElementSibling) element.previousElementSibling.style.color = "var(--LightRed)";
}
function $60eafcd7eea799ef$var$calculateAge(now, date) {
    let diffMs = now - date;
    let age = new Date(diffMs);
    let years = Math.abs(age.getUTCFullYear() - 1970);
    let months = Math.abs(age.getMonth());
    let days = Math.abs(age.getUTCDate() - 1);
    document.getElementById("yearsResultId").textContent = years + $14308410f8b0e190$export$27b7b95a5fde2b31;
    document.getElementById("monthsResultId").textContent = months + $14308410f8b0e190$export$27b7b95a5fde2b31;
    document.getElementById("daysResultId").textContent = days + $14308410f8b0e190$export$27b7b95a5fde2b31;
}


//# sourceMappingURL=index.a7435dba.js.map
