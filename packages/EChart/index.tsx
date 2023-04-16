import { ExtractPropTypes, PropType, defineComponent, onMounted, ref } from "vue";
import style  from "./index.module.less";
import type { EChartsOption,ECharts } from 'echarts';
import * as echarts from 'echarts';

export const EchartPublicProps = {
    width:{
        type: String,
        default: '100%'
    },
    height:{
        type: String,
        default: '100%'
    },
    options:{
        type: Object as PropType<EChartsOption>,
        default: () => ({})
    }
  
}

export type EchartPublicProps = ExtractPropTypes<typeof EchartPublicProps>;

const EchartProps = {
    
}

export default defineComponent({
    props:{
        ...EchartPublicProps,
        ...EchartProps
    },
    setup(props) {

        const getStyle = ()=>{
            return {
                width: props.width,
                height: props.height
            }
        }

        const echartRef = ref<HTMLDivElement>();
        let instance: ECharts;

        onMounted(()=>{
            instance = echarts.init(echartRef.value as HTMLDivElement);
            instance.setOption(props.options);
        })

        

        return () => (
            <div ref={echartRef} style={getStyle()}></div>
        )
    }
});