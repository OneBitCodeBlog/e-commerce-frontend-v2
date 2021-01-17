import api from './api';

import SystemRequirement from '../dtos/SystemRequirement';
import Meta from '../dtos/Meta';

interface SystemRequirementsIndexData {
  system_requirements: SystemRequirement[];
  meta: Meta;
}

const SystemRequirementsService = {
  index(url: string) {
    return api.get<SystemRequirementsIndexData>(url).then(response => response.data);
  },

  create(system_requirement: SystemRequirement) {
    return api.patch<void>('admin/v1/system_requirements', system_requirement);
  },

  update(system_requirement: SystemRequirement) {
    return api.put<void>(
      `/admin/v1/system_requirements/${system_requirement.id}`,
      system_requirement
    );
  },

  delete(id: number) {
    return api.delete<void>(`/admin/v1/system_requirements/${id}`);
  }
}

export default SystemRequirementsService;