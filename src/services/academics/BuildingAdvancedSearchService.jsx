
import { setting } from '../../settings';
import Token from "../get-token"; 

export const getBuildingAdvancedSearch = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}buildingadvancedsearch`,
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

export const getAllBuildingAdvancedSearch = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}buildingadvancedsearch/all`,
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

export const getOneBuildingAdvancedSearch = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}buildingadvancedsearch/${id}/detail`,
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

export const addBuildingAdvancedSearch = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}buildingadvancedsearch`,
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

export const updateBuildingAdvancedSearch = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}buildingadvancedsearch/${id}`,
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

export const updateAllBuildingAdvancedSearchs = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}buildingadvancedsearch`,
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

export const deleteBuildingAdvancedSearch = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}buildingadvancedsearch/${id}`,
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

export const searchBuildingAdvancedSearch = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}buildingadvancedsearch/search`,
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

export const searchAllBuildingAdvancedSearch = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}buildingadvancedsearch/search/all`,
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

export const advancedSearchBuildingAdvancedSearch = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}buildingadvancedsearch/advancedsearch`,
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

export const advancedSearchAllBuildingAdvancedSearch = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}buildingadvancedsearch/advancedsearch/all`,
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
  return response.map(buildingadvancedsearch => getDetail(buildingadvancedsearch));
};

export const getDetail = (response) => {
  return response;
};