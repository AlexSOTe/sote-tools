/**
 * json对象 转换成 ?a=1&b=2&c=3 的样子
 * @param {any} json json对象
 */
export declare function JsonToQuery(json: any): string;
/**
 * 把'?brandId=1&modelId=19427'的字符串转换为json对象
 * @param url 带转换字符串
 * @param seperator1 用来替换与号（&）的分隔符，默认是与号（&）
 * @param seperator2 用来替换等号（=）的分隔符，默认是等号（=）
 */
export declare function QueryToJson(url: any, seperator1?: string, seperator2?: string): any;
/**
 * 获取当前时间的年月日：2021-01-01
 * @param {any} timeStamp 目标时间戳
 */
export declare function GetCurrentDate(timeStamp: number): string;
/**
 * 获取项目入口url上面的参数
 */
export declare const entryUrlQuery: any;
/**
 * 创建用于template遍历的key
 * 禁止在template中使用，会重新渲染template造成已改变template数据的丢失
 */
export declare function CreateViewKey(): string;
