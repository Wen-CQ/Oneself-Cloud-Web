
import { oneselfModuleSystem } from '@/api/config/servicePath';

import http from '@/api';

export const sysDictList = () => {
	return http.get('/system' + oneselfModuleSystem + '/sysDict/list');
};
