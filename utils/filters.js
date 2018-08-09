export function host(url) {
    const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    const parts = host.split('.').slice(-3);
    if (parts[0] === 'www') parts.shift();
    return parts.join('.');
}

export function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time);
    if (between < 3600) {
        return pluralize(~~(between / 60), ' minute');
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' hour');
    } else {
        return pluralize(~~(between / 86400), ' day');
    }
}

export function MoneyByTenThousand(moneyCount) {
    // return isNaN(moneyCount) ? '' : (Math.floor(moneyCount / 100) / 100).toFixed(2);
    return isNaN(moneyCount) ? '' : (moneyCount / 10000).toFixed(2); //和app端保持一直
}

export function maskPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{5})(\d{3})/, function(match, $1, $2, $3) {
        return $1 + '*****' + $3;
    });
}

export function ConvertDistanceToKm(distance) {
    let v = (distance / 1000).toFixed(2)
    return (isNaN(v) || v == 'NaN') ? distance : v;
}

export function DiscountCualculator(orgPrice, discountPrice) {
    return Math.floor((discountPrice / orgPrice || 0) * 100) / 10;
}

export function FormatNumberWithComma(input) {
    var type = typeof input;
    var numStr = 0;
    if (type == 'number') {
        numStr = parseInt(input).toString();
    } else if (type == 'string') {
        numStr = input;
    } else {
        return;
    }
    return numStr.replace(/(?=(?!(\b))(\d{3})+$)/g, ',');
}
export function timesAgoInAsks(time, now) {
    let differTime = timeDiff(time, now);
    let fullMinutes = differTime.fullMinutes;
    let label = '';
    if (fullMinutes > 180) {
        label = '3小时前';
    } else if (fullMinutes > 120) {
        label = '2小时前';
    } else if (fullMinutes > 60) {
        label = '1小时前';
    } else {
        label = fullMinutes + '分钟前';
    }
    return label;
}

function timeDiff(startTime, endTime) {
    const differTime = endTime - startTime;
    const fullSeconds = Math.floor(differTime / 1000);
    const fullMinutes = Math.floor(fullSeconds / 60);
    const fullHours = Math.floor(fullMinutes / 60);
    const fullDays = Math.floor(fullHours / 24);
    /* const fullWeeks = Math.floor(fullDays / 7);
    const fullMonths = Math.floor(fullDays / 30);
    const fullYears = Math.floor(fullDays / 365); */
    let differObj = {
        fullMilliSecond: differTime,
        fullSeconds: fullSeconds,
        fullMinutes: fullMinutes,
        fullHours: fullHours,
        fullDays: fullDays
            /* fullWeeks: fullWeeks,
            fullMonths: fullMonths,
            fullYears: fullYears */
    };
    return differObj;
}

function pluralize(time, label) {
    if (time === 1) {
        return time + label;
    }
    return time + label + 's';
}