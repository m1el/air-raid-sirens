const sirens = `
2022-02-24T07:43,2022-02-24T08:43
2022-02-25T06:53,2022-02-25T07:56
2022-02-25T12:17,2022-02-25T13:00
2022-02-26T06:15,2022-02-26T07:12
2022-02-26T13:46,2022-02-26T14:46
2022-02-26T17:18,2022-02-26T18:06
2022-02-27T19:33,2022-02-27T19:51
2022-02-28T20:54,2022-02-28T21:23
2022-03-03T22:10,2022-03-03T22:33
2022-03-04T09:55,2022-03-04T10:11
2022-03-05T21:02,2022-03-05T21:56
2022-03-11T04:43,2022-03-11T04:58
2022-03-11T11:23,2022-03-11T11:49
2022-03-12T05:52,2022-03-12T07:35
2022-03-13T03:32,2022-03-13T06:34
2022-03-13T11:21,2022-03-03T11:49
2022-03-14T02:19,2022-03-14T07:41
2022-03-14T19:55,2022-03-14T20:41
2022-03-15T11:39,2022-03-15T12:44
2022-03-15T18:17,2022-03-15T19:19
2022-03-16T02:53,2022-03-16T05:24
2022-03-17T04:17,2022-03-17T04:54
2022-03-18T06:08,2022-03-18T06:47
2022-03-19T11:36,2022-03-19T11:54
2022-03-19T15:15,2022-03-19T16:34
2022-03-20T05:28,2022-03-20T06:35
2022-03-21T01:33,2022-03-21T02:46
2022-03-21T06:53,2022-03-21T07:43
2022-03-21T10:40,2022-03-21T11:00
2022-03-21T11:17,2022-03-21T11:45
2022-03-21T16:17,2022-03-21T19:02
2022-03-22T06:54,2022-03-22T08:20
2022-03-22T13:23,2022-03-22T13:35
2022-03-22T15:17,2022-03-22T16:31
2022-03-22T17:42,2022-03-22T19:50
2022-03-22T20:31,2022-03-22T21:11
2022-03-25T16:15,2022-03-25T17:28
2022-03-26T16:12,2022-03-26T20:01
2022-03-26T20:50,2022-03-26T21:36
2022-03-27T21:43,2022-03-27T23:03
2022-03-28T12:52,2022-03-28T13:27
2022-03-28T21:39,2022-03-28T22:10
2022-03-29T03:46,2022-03-29T04:50
2022-03-29T12:57,2022-03-29T13:34
2022-03-29T16:57,2022-03-29T17:49
2022-03-29T20:38,2022-03-29T21:21
2022-03-29T23:23,2022-03-30T00:16
2022-03-30T12:00,2022-03-30T12:31
2022-03-30T17:25,2022-03-30T18:19
2022-03-31T22:20,2022-03-31T23:17
2022-04-01T20:01,2022-04-01T20:28
2022-04-02T03:40,2022-04-02T06:37
2022-04-02T17:14,2022-04-02T17:55
2022-04-03T04:22,2022-04-03T06:49
2022-04-03T20:15,2022-04-03T20:54
2022-04-03T22:13,2022-04-03T22:44
2022-04-04T14:49,2022-04-04T15:12
2022-04-04T18:19,2022-04-04T19:02
2022-04-04T22:47,2022-04-04T23:14
2022-04-05T05:32,2022-04-05T06:15
2022-04-05T16:14,2022-04-05T16:53
2022-04-05T22:19,2022-04-05T23:04
2022-04-05T05:32,2022-04-05T06:15
2022-04-05T16:14,2022-04-05T16:53
2022-04-05T22:19,2022-04-05T23:04
2022-04-06T11:16,2022-04-06T11:46
2022-04-06T13:07,2022-04-06T13:32
2022-04-06T11:16,2022-04-06T11:46
2022-04-08T08:27,2022-04-08T08:53
2022-04-11T04:22,2022-04-11T04:49
2022-04-11T23:12,2022-04-12T00:06
2022-04-12T11:33,2022-04-12T11:46
2022-04-14T21:55,2022-04-14T22:54
2022-04-15T00:19,2022-04-15T02:05
2022-04-15T11:51,2022-04-15T12:55
2022-04-16T05:46,2022-04-16T07:02
2022-04-16T23:33,2022-04-17T00:01
2022-04-17T05:55,2022-04-17T06:50
2022-04-18T07:44,2022-04-18T09:16
2022-04-18T10:33,2022-04-18T11:00
2022-04-18T21:18,2022-04-18T23:30
2022-04-19T01:43,2022-04-19T02:26
2022-04-20T20:06,2022-04-20T21:09
2022-04-21T17:10,2022-04-21T17:54
2022-04-21T20:08,2022-04-21T21:08
2022-04-23T13:42,2022-04-23T14:42
2022-04-23T22:45,2022-04-23T23:49
2022-04-24T18:56,2022-04-24T20:49
2022-04-25T07:20,2022-04-25T09:31
2022-04-25T11:35,2022-04-25T12:23
2022-04-25T20:55,2022-04-25T22:13
2022-04-27T10:17,2022-04-27T10:40
`;

const retain = (obj, keys, fn=x=>x) => {
    const rv = {};
    for (const key of keys) {
        rv[key] = fn(obj[key]);
    }
    return rv;
};
const dow = ({ year, month, day }) =>
    new Date(year, month - 1, day).getDay();
const addDay = ({ year, month, day }, { hour, minute }, delta) => {
    const obj = new Date(year, month - 1, day + delta);
    return {
        year: obj.getYear() + 1900,
        month: obj.getMonth() + 1,
        day: obj.getDate(),
        hour,
        minute,
    };
};
const dayProgress = ({ hour, minute }) =>
    (hour + minute / 60) / 24;
const endOfDay = ({ year, month, day }) =>
    ({ year, month, day, hour: 24, minute: 0 });
const cmpDate = (a, b) => a.year - b.year || a.month - b.month || a.day - b.day;
const dateRe = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minute>\d{2})$/;
const parseDateTime = (str) => {
    const match = dateRe.exec(String(str).trim());
    if (match) {
        return retain(match.groups, ['year', 'month', 'day', 'hour', 'minute'], Number);
    }
};
const zp = (s) => '0'.substring(String(s).length - 1) + s;
const formatTime = ({ hour, minute }) => `${zp(hour)}:${zp(minute)}`;
const formatDate = ({ year, month, day }) => `${year}-${zp(month)}-${zp(day)}`;
const formatDateTime = (date) => `${formatDate(date)}T${formatTime(date)}`;

const days = {};
const addSegment = (start, end) => {
    const date = formatDate(start);
    const day = days[date] || (days[date] = {
        date: start,
        segments: [],
    });
    day.segments.push({
        progress: { start: dayProgress(start), end: dayProgress(end) },
        segment: { start, end },
    });
};
let minDate, maxDate;
for (let line of sirens.split(/\n/)) {
    if (!line) { continue; }
    let [start, end] = line.split(',').map(parseDateTime);
    if (!start || !end) { continue; }
    if (!minDate || cmpDate(start, minDate) < 0) { minDate = start; }
    if (!maxDate || cmpDate(start, minDate) > 0) { maxDate = end; }

    let date = start;
    while (true) {
        const position = cmpDate(date, end);
        if (position < 0) {
            addSegment(date, endOfDay(date));
            date = addDay(date, { hour: 0, minute: 0 }, 1)
        } else if (position === 0) {
            addSegment(date, end);
            break;
        } else {
            break;
        }
    }
}

const vdom = ['div', { class: 'days' }];
for (let date = minDate;
    cmpDate(date, maxDate) <= 0;
    date = addDay(date, { hour: 0, minute: 0 }, 1)
) {
    const key = formatDate(date);
    const day = days[key] || { date, segments: [] };
    const segments = ['div', { class: 'segments' }];
    for (const segment of day.segments) {
        const { start, end } = segment.progress;
        const style = `top: ${start * 100}%; height: ${(end - start) * 100}%`;
        const text = formatTime(segment.segment.start)
            + ' \u2013 ' + formatTime(segment.segment.end);
        segments.push(['div', { class: 'segment', style }, text]);
    }
    vdom.push(['div', { class: 'day' },
        ['div', { class: 'day-title' }, key],
        segments]);
}

const render = (obj) => {
    if (typeof obj === 'string') {
        return new Text(obj);
    } else if (Array.isArray(obj)) {
        if (obj[0] === '!comment') {
            return new Comment(obj[1]);
        }
        var dom = document.createElement(obj[0]);
        var attrs = obj[1];
        Object.keys(attrs).forEach(
            (key) => dom.setAttribute(key, attrs[key]));
        obj.slice(2).forEach(
            (child) => dom.appendChild(render(child)));
        return dom;
    } else {
        throw 'Cannot make dom of: ' + obj;
    }
};
const dom = render(vdom);
document.getElementById('target').appendChild(dom);
