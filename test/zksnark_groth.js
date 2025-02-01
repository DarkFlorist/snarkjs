/*
    Copyright 2018 0kims association.

    This file is part of zksnark JavaScript library.

    zksnark JavaScript library is a free software: you can redistribute it and/or
    modify it under the terms of the GNU General Public License as published by the
    Free Software Foundation, either version 3 of the License, or (at your option)
    any later version.

    zksnark JavaScript library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
    more details.

    You should have received a copy of the GNU General Public License along with
    zksnark JavaScript library. If not, see <https://www.gnu.org/licenses/>.
*/

import { describe, it } from 'micro-should';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { groth as zkSnark } from '../index.js';
import Circuit from '../src/circuit.js';
import { assert } from './test_utils.js';
const __dirname = dirname(fileURLToPath(import.meta.url));

describe("zkSnark Groth", () => {
    it("Load a circuit, create trusted setup, create a proof and validate it", () => {


        const cirDef = JSON.parse(fs.readFileSync(path.join(__dirname, "circuit", "sum.json"), "utf8"));
        const cir = new Circuit(cirDef);

        const setup = zkSnark.setup(cir);

        const witness = cir.calculateWitness({"a": "33", "b": "34"});

        const {proof, publicSignals} = zkSnark.genProof(setup.vk_proof, witness);

        assert( zkSnark.isValid(setup.vk_verifier, proof, publicSignals));
    });
});
it.runWhen(import.meta.url);
