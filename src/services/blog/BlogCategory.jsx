import { setting } from '../../settings';
import Token from "../get-token"; 

export const getBlogCategories = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}blogcategory`,
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
        return null;
    });
return response;
};

export const getAllBlogCategories = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}blogcategory/all`,
    request_BODY: ''
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const getOneBlogCategory = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}blogcategory/${id}`,
    request_BODY: ""
})
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const addBlogCategory = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}blogcategory`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const updateBlogCategory = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}blogcategory/${id}`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const updateAllBlogCategory = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}blogcategory`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const deleteProductBlogCategory = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}blogcategory/${id}`,
    request_BODY: '',
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const searchBlogCategory = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}blogcategory/search`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const searchAllBlogCategory = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}blogcategory/search/all`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const advancedSearchBlogCategory = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}blogcategory/advancedsearch`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const advancedSearchAllBlogCategory = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}blogcategory/advancedsearch/all`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return response.data;
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const getAllDetail = (response) => {
  return response.map(blogcategory => getDetail(blogcategory));
};

export const getDetail = (response) => {

  return response;
};
