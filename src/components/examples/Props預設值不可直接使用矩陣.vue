<template>
</template>
<script lang="ts">
class SymetryIconBtnsDefault {
    isVertical?= false;
    primeVueIconClasses?: string[] = ['pi-caret-left', 'pi-caret-right'];
}
</script>
<script setup lang="ts">
/**
 * 標題：Props預設值不可直接使用矩陣
 * 
 * 敘述：如標題說明，此性質導致由class直接產生的預設值實例，若含有矩陣預設值，填入withDefaults的default會報錯。
 * 因此，雖然純ts有漂亮的預設值與型別解決方案（參考//TODO），遇到Vue3還是只能用Vue3的標準玩法（以函數的方式返回array）。
 * 
 * 參考：
 * https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration
 * https://thewebdev.info/2022/03/12/how-to-set-default-value-of-an-array-prop-in-vue-js/
 */

const symetryIconBtnsDefault = new SymetryIconBtnsDefault()
// 使用含有array預設值的實例會出錯
const props = withDefaults(
    defineProps<SymetryIconBtnsDefault>(),
    symetryIconBtnsDefault
);

// 不含就不會
const props1 = withDefaults(
    defineProps<SymetryIconBtnsDefault>(),
    {
        isVertical: false
    }
);

// 用物件寫法但是含array屬性一樣會錯
const props2 = withDefaults(
    defineProps<SymetryIconBtnsDefault>(),
    {
        isVertical: false,
        primeVueIconClasses: []
    }
);

// 以函數的方式返回array就不會出錯
const props3 = withDefaults(
    defineProps<SymetryIconBtnsDefault>(),
    {
        isVertical: false,
        primeVueIconClasses: ()=>[]
    }
);

</script>