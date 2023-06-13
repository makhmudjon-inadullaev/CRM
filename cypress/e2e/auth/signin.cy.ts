describe('Page initialization', () => {
    let data: AuthDataType
    beforeEach(() => {
        cy.fixture('auth').then((auth) => { data = auth; });
        cy.visit('http://localhost:4200')
    });

    it('Page has "Akvelon" logo', () => {
        cy.get('img[alt="Akvelon"]').should('have.attr', 'src', data.logo)
    })
    it('Page has main title', () => {
        cy.get('h2').contains(data.title).should('exist')
    })

    it('Page has "Email" input', () => {
        cy.get('label[for="email"]').contains('Email address').should('exist')
        cy.get('input[name="email"]').should('exist')
    })

    it('Page has "Password" input', () => {
        cy.get('label[for="password"]').contains('Password').should('exist')
        cy.get('input[name="password"]').should('exist')
    })

    it('Page has "Sign in" button', () => {
        cy.get('button[type="submit"]').should('exist').should('be.disabled').contains('Sign in')
    })

    it('Page has "Forgot password"', () => {
        cy.get('a[href="#"]').contains('Forgot password?').should('exist')
    })
    it('Page has "Free trial" option', () => {
        cy.get('a[href="#"]').contains('Start a 14 day free trial').should('exist')
    })
});

describe('Testing Email input', () => {
    let data: AuthDataType
    beforeEach(() => {
        cy.fixture('auth').then((auth) => { data = auth; })
        cy.visit('http://localhost:4200')
    });
    it('Default state', () => {
        cy.get('input[name="email"]').should('have.value', '')
        cy.get('input[name="email"]').should('have.class', 'ng-untouched')
    })
    it('When unfocused with empty', () => {
        cy.get('input[name="email"]').focus().blur()
        cy.get('input[name="email"]').should('have.value', '')
        cy.get('input[name="email"]').should('have.class', 'ng-invalid')
        cy.get('span').contains(data.invalid.email).should('have.class', 'text-xs', 'text-[#a94442]')
    })
    it('When invalid email entered', () => {
        cy.get('input[name="email"]').type(data.test.invalidEmail).blur()
        cy.get('input[name="email"]').should('have.class', 'ng-invalid')
        cy.get('span').contains(data.invalid.email).should('have.class', 'text-xs', 'text-[#a94442]')
    })
    it('When valid email entered', () => {
        cy.get('input[name="email"]').type(data.test.email).blur()
        cy.get('input[name="email"]').should('have.class', 'ng-valid')
    })
});

describe('Testing Password input', () => {
    let data: AuthDataType
    beforeEach(() => {
        cy.fixture('auth').then((auth) => { data = auth; })
        cy.visit('http://localhost:4200')
    });
    it('Default state', () => {
        cy.get('input[name="password"]').should('have.value', '')
        cy.get('input[name="password"]').should('have.class', 'ng-untouched')
    })
    it('When unfocused with empty', () => {
        cy.get('input[name="password"]').focus().blur()
        cy.get('input[name="password"]').should('have.value', '')
        cy.get('input[name="password"]').should('have.class', 'ng-invalid')
        cy.get('span').contains(data.invalid.password).should('have.class', 'text-xs', 'text-[#a94442]')
    })
    it('When password entered', () => {
        cy.get('input[name="password"]').type(data.test.password).blur()
        cy.get('input[name="password"]').should('have.class', 'ng-valid')
    })
});

describe('Testing "Sign in" button', () => {
    let data: AuthDataType
    beforeEach(() => {
        cy.fixture('auth').then((auth) => { data = auth; })
        cy.visit('http://localhost:4200')
    });
    it('Default state', () => {
        cy.get('button[type="submit"]').contains('Sign in').should('be.disabled')
    })
    it('When form invalid', () => {
        cy.get('button[type="submit"]').contains('Sign in').should('be.disabled')
        cy.get('input[name="email"]').type(data.test.invalidEmail).blur()
        cy.get('input[name="password"]').type(data.test.password).blur()
        cy.get('button[type="submit"]').contains('Sign in').should('be.disabled')
    })
    it('When form valid', () => {
        cy.get('button[type="submit"]').contains('Sign in').should('be.disabled')
        cy.get('input[name="email"]').type(data.test.email).blur()
        cy.get('input[name="password"]').type(data.test.password).blur()
        cy.get('button[type="submit"]').contains('Sign in').should('not.be.disabled')
    })
});

describe('Auth flow', () => {
    let data: AuthDataType
    beforeEach(() => {
        cy.fixture('auth').then((auth) => { data = auth; })
        cy.visit('http://localhost:4200')
    });
    it('Check if we can successful login', () => {
        cy.get('input[name="email"]').type(data.auth.email)
        cy.get('input[name="password"]').type(data.auth.password)
        cy.get('button[type="submit"]').contains('Sign in').click()
        cy.get('button#user-menu-button[type="button"]').should('exist').should('have.length', 4)
    })
    it('Check if we can signout after a successful login', () => {
        cy.get('input[name="email"]').type(data.auth.email)
        cy.get('input[name="password"]').type(data.auth.password)
        cy.get('button[type="submit"]').contains('Sign in').click()
        cy.get('button#user-menu-button[type="button"]').first().click()
        cy.get('button[role="menuitem"]').contains('Logout').click()
        cy.get('h2').contains(data.title).should('exist')
    })
})