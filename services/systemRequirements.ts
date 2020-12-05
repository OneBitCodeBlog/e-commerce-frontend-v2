import api from './api';

import SystemRequirement from '../dtos/SystemRequirement';
import Meta from '../dtos/Meta';

interface ISystemRequirementsIndexData {
  system_requirements: SystemRequirement[];
  meta: Meta;
}

const SystemRequirementsService = {
  index(url: string) {
    return api.get<ISystemRequirementsIndexData>(url).then(response => response.data);
  }
}

export default SystemRequirementsService;