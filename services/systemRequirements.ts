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
  },

  create(system_requirement: SystemRequirement) {
    return api.post<void>('admin/v1/system_requirements', system_requirement);
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