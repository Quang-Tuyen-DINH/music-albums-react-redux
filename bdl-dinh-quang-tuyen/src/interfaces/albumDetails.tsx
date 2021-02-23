interface AlbumDetails {
  category: {
    attributes: {
      ['im:id']: string;
      label: string;
      scheme: string;
      term: string
    };
  };
  id: {
    attributes: {
      ['im:id']: string;
    };
    label: string;
  };
  ['im:artist']: {
    attributes: {
      href: string;
    };
    label: string;
  };
  ['im:contentType']: {
    attributes: {
      term: string;
      label: string;
    };
    ['im:contentType']: {
      attributes: {
        term: string;
        label: string;
      }
    };
  };
  ['im:image']: Array<{
    label: string;
  }>;
  ['im:itemCount']: {
    label: string;
  };
  ['im:name']: {
    label: string;
  };
  ['im:price']: {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    }
  };
  ['im:releaseDate']: {
    attributes: {
      label: string;
    };
    label: string;
  };
  link: {
    attributes: {
      href: string;
      rel: string;
      type: string;
    }
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
}

export default AlbumDetails;