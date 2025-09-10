import { setting } from '../../settings';
import Token from "../get-token"; 
import { setting } from '../location/LocationService';

export const getEmployeesService = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}employeeservice`,
    request_BODY: ''
    }).then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const getAllEmployeesService = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}employeeservice/all`,
    request_BODY: ''
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const getOneEmployee = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}employeeservice/${id}/detail`,
    request_BODY: ""
})
    .then((response) => {
        return getAllDetail(response.data);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const addEmployee = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}employeeservice`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const updateEmployee = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}employeeservice/${id}`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const updateAllEmployees = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}employeeservice`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const deleteProductEmployee = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}employeeservice/${id}`,
    request_BODY: '',
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const searchEmployee = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}employeeservice/search`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const searchAllEmployee = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}employeeservice/search/all`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const advancedSearchEmployee = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}employeeservice/advancedsearch`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const advancedSearchAllEmployee = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}employeeservice/advancedsearch/all`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const getAllDetail = (response) => {
  for (var a = 0; a < response.length; a++) {
      response[a] = this.getDetail(response[a]);
    }
    return (response);
};

export const getDetail = (response) => {
       {
    if (response.person_DETAIL != null) {
      response.person = this.personservice.getDetails(JSON.parse(response.person_DETAIL));
      response.person_DETAIL = response.person.title + " " + response.person.forenames + " " + response.person.surname;
    }

    if (response.company_DETAIL != null) {
      response.company = this.companyservice.getDetail(JSON.parse(response.company_DETAIL));
      response.company_DETAIL = response.company.company_NAME;
    }

    return (response);
  }

};
