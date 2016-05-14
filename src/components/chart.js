import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import moment from 'moment';
import rickshaw from 'rickshaw';
import d3 from 'd3';

function average(data) {
  console.log(data.map(x => moment(x).unix()));
  fs.writeFileSync('test.txt', util.inspect(obj));
  return data.map(x => moment(x).format('D'));
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={average(props.data)}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
}