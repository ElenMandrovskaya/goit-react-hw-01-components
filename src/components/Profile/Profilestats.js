import PropTypes from 'prop-types';
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
};
Profilestats.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};