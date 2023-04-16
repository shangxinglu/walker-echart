import { defineComponent } from "vue";
import style  from "./index.module.less";
import EChart from "@packages/EChart";
export default defineComponent({
    setup(props) {
        return () => (
            <EChart  options={{
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [
                    {
                      data: [150, 230, 224, 218, 135, 147, 260],
                      type: 'line'
                    }
                  ]
            }} />
        )
    }
});