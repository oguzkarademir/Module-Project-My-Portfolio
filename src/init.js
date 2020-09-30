'use strict';

import { handler } from "./handler/handler-try.js";

document.getElementById('list-name-input')
    .addEventListener('click', handler);
