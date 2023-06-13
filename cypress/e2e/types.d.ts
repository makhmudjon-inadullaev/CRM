type AuthDataType = {
    title: string,
    logo: string,
    auth: {
      email: string
      password: string
    }
    invalid: {
      email: string,
      password: string,
    },
    test: {
      email: string,
      invalidEmail: string,
      password: string
    }
  }

  type HomeDataType = {
    auth: {
        email: string
        password: string
    }
    team: {
        title: string
        description: string
    },
    projects: {
        title: string
        description: string
    },
    documents: {
      title: string
      description: string
    },
    learning: {
      forms: string
      pipes: string
      http: string
    }
  }