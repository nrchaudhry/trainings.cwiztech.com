
import { setting } from '../../settings';
import Token from "../get-token"; 

export const getCampuses = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}campus`,
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

export const getAllCampuses = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}campus/all`,
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

export const getOneCampus = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}campus/${id}/detail`,
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

export const addCampus = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}campus`,
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

export const updateCampus = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}campus/${id}`,
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

export const updateAllCampuses = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}campus`,
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

export const deleteCampus = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}campus/${id}`,
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

export const searchCampus = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}campus/search`,
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

export const searchAllCampuses = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}campus/search/all`,
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

export const advancedSearchCampus = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}campus/advancedsearch`,
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

export const advancedSearchAllCampuses = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}campus/advancedsearch/all`,
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
  return response.map(campus => getDetail(campus));
};

export const getDetail = (response) => {
    
    response.address = response.address_LINE1;
    if (response.address_LINE2 != null && response.address_LINE2 != '')
      response.address = response.address + ", " + response.address_LINE2;
    if (response.address_LINE3 != null && response.address_LINE3 != '')
      response.address = response.address + ", " + response.address_LINE3;
    if (response.address_LINE4 != null && response.address_LINE4 != '')
      response.address = response.address + ", " + response.address_LINE4;
    if (response.address_LINE5 != null && response.address_LINE5 != '')
      response.address = response.address + ", " + response.address_LINE5;

    if (response.location_DETAIL != null) {
      response.location = this.locationservice.getDetail(JSON.parse(response.location_DETAIL));
      response.locations = [];
      response.location_DETAIL = null;
      while (response.location.locationparent_ID != null) {
        response.address = response.address + ", " + response.location.location_NAME;
        response.locations.push(response.location);
        response.location = response.location.locationparent_ID;
      }
      response.locations.push(response.location);
    }

    if (response.university_DETAIL != null) {
      response.university = this.universityservice.getDetail(JSON.parse(response.university_DETAIL));
      response.university_DETAIL = null
    }
  return response;
};