import { PropType, defineComponent } from "vue";
import style  from "./index.module.less";
import EChart, { EchartPublicProps } from "@packages/EChart";
import { getBasicProps } from "@packages/utils/util";



/**
 * 常用配置
 * 显示折线点
 * 显示折线点值
 * 线条颜色
 * 平滑
 * 线条宽度
 * 
 */

/**
 * 考虑场景
 * 
封装数据格式化函数，以便于接收不同类型的数据。
封装自定义标签和提示框，方便根据实际需要展示数据。
封装自定义样式，包括线条样式、点的样式、区域填充等。
封装数据筛选和排序功能，方便用户根据实际需要展示数据。
封装缩放和滚动功能，以便于用户查看更多数据。
封装图例功能，方便用户查看每个线条的含义。
封装响应式布局，适配不同大小的屏幕和设备。
 */





const ELineProps = {
    ...EchartPublicProps,

   
}

export default defineComponent({
    props:ELineProps,
    setup(props) {
        return () => (
           <EChart {...getBasicProps(props)} />
        )
    }
});