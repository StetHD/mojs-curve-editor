
import {h} from 'preact';
import Icon from './icon';
import IconButton from './icon-button';
import IconDivider from './icon-divider';
import PointControls from './point-controls';

const CLASSES = require('../../css/blocks/curve-editor.postcss.css.json');

const CurveEditorLeft = ({state}) => {
  return  <div className={CLASSES['curve-editor__left']}>
            <IconButton shape="code" />
            <IconDivider />
            <PointControls  state={state}
                            className={CLASSES['curve-editor__anchor-buttons']} />
            <a  className={CLASSES['curve-editor__mojs-logo']}
                href="https://github.com/legomushroom/mojs-curve-editor" target="_blank">
              <Icon shape="mojs-logo" />
            </a>
          </div>;
}

export default CurveEditorLeft;
