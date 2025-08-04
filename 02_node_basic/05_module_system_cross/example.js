// CJSとESM間のモジュール連携
// OK: CJS -> ESM
// NG: ESM -> CJS

import { minus } from './calc.cjs';

const minusResult = minus(1, 2);
console.log(minusResult);