declare function zxcvbn(password: string, user_inputs?: Array<string>): IZxcvbnResult;

interface IZxcvbnResult
{
    calc_time: number;
    crack_times_display: IZxcvbnCrackTime;
    crack_times_seconds: IZxcvbnCrackTime;
    feedback: IZxcvbnFeedback;
    guesses: number;
    guesses_log10: number;
    password: string;
    score: number;
    sequence: any; // TODO lazy
}

interface IZxcvbnCrackTime
{
    offline_fast_hashing_1e10_per_second: string | number;
    offline_slow_hashing_1e4_per_second: string | number;
    online_no_throttling_10_per_second: string | number;
    online_throttling_100_per_hour: string | number;
}

interface IZxcvbnFeedback
{
    suggestions: Array<string>;
    warning: string;
}