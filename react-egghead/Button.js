'use strict';

import React from 'react';
import Mixin from './Mixin';

const Button = (props) => <button onClick={props.update}>{props.text} - {props.val}</button>
const MixedButton = Mixin(Button);

export default MixedButton;
