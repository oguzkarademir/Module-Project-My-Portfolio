'use strict';

import { getProjectHandler } from "./handler/handler-try.js";

document.getElementById('get-projects')
    .addEventListener('click', getProjectHandler);