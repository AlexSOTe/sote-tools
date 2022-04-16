interface AnyJsonObject {
    [key: string]: any;
}
/**
 * json对象 转换成 ?a=1&b=2&c=3 的样子
 * @param {AnyJsonObject} json json对象
 * @param {boolean} isSpliceQuestionMark 是否需要拼接问号【?】
 */
export declare function JsonToQuery(json: AnyJsonObject, isSpliceQuestionMark?: boolean): string;
/**
 * 把'?brandId=1&modelId=19427'的字符串转换为json对象
 * @param url 带转换字符串
 * @param seperator1 用来替换与号（&）的分隔符，默认是与号（&）
 * @param seperator2 用来替换等号（=）的分隔符，默认是等号（=）
 */
export declare function QueryToJson(url: string, seperator1?: string, seperator2?: string): AnyJsonObject;
/**
 * 获取当前时间的年月日：2021-01-01
 * @param {any} timeStamp 目标时间戳
 */
export declare function GetCurrentDate(timeStamp: number): string;
/**
 * 获取项目入口url上面的参数
 * @deprecated Will 废弃 in the future.
 */
export declare const entryUrlQuery: AnyJsonObject;
/**
 * 创建用于template遍历的key
 * 禁止在template中使用，会重新渲染template造成已改变template数据的丢失
 */
export declare function CreateViewKey(): string;
/**
 * 复制传入的文字（暂不考虑）兼容性
 * @param text {string} 要拷贝的文本
 * @returns Promise<void>
 */
export declare function CopyText(text: string): Promise<void>;
export {};
