import { Statslist, Statsitem, Statslabel, Statsquantity } from './Profilestats.styles';
import { statsConfig } from '../../utils/statsConfig'

export default function Profilestats() {
    return (
         <Statslist>
        {statsConfig.map(({ label, quantity }) => (
          <Statsitem key={label}>
                <Statslabel>{label}</Statslabel>
                <Statsquantity>{quantity}</Statsquantity>
          </Statsitem>
        ))}
      </Statslist>
  );
}