import { it } from 'micro-should';
import './algebra.js';
import './calculatewitness.js';
import './pols.js';
import './ratzqfield.js';
import './zksnark.js';
import './zksnark_groth.js';
import './zksnark_kimleeoh.js';

it.runWhen(import.meta.url);
