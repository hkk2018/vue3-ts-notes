export { }
/**
 * 標題：default-value-solutions
 * 敘述：引入DVIV、RV等後綴字，規範出一套標準的預設值處理流程。
 * 參考：
 */


type ComponentType = 'text' | 'select' | 'radio' | 'auto-cmplt';
/** 
 * DV : Default Value，當實例化可做為預設值時加此後綴。
 * IV : Input Value，表示作為使用者輸入資料時的規格，規範哪些必填、哪些選填。（範例是class但純interface也符合）
 *      如果是class加上此後綴，表示不宣告constructor。
 *      原因是IV形式原則上是給使用者以Object Literals的方式輸入參數，
 *      不會實例化物件、透過constructor賦參，所以規定一概不可宣告constructor。
 * 
 * DVIV : DV表示必為class，class加上IV，表示不宣告constructor，此時ts就會要求每個屬性都必須宣告預設值（否則報錯），
 *        這也就是說一旦合乎規範地標註DVIV後綴，表示其必為class且其實例的預設值齊全。
 */
class ComponentInfoDVIV {
    content: string = '';
    type?: ComponentType = 'text';
    isToSkip?= false;
    shoudClear?= false;
    radioBtnSetSize?= 2;
}

/** RV：Required Value，表示每個屬性都必定存在，通常是用於強制轉型預設值齊全的實例（DVIV），免得費工去處理屬性可能未定義的問題。 */
type ComponentInfoRV = Required<ComponentInfoDVIV>

/**
 * 使用範例，通常透過Object.assign把使用者輸入的值覆寫到預設值上，並透過as關鍵字強制轉型。
 * @param componentInfos 
 */
function fillForm(componentInfos: ComponentInfoDVIV[]) {
    const componentInfoRVs: ComponentInfoRV[] = componentInfos.map(
        ci => Object.assign(new ComponentInfoDVIV, ci) as ComponentInfoRV
    )
    // ...其他實現邏輯
}