describe('Dashboard', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
        })
    });

    it('Check if "Cashflow" report exists', () => {
        cy.get('h1').contains('Cashflow').should('have.class', 'font-semibold', 'leading-7')
    })
    it('Check if "Cashflow" report has 4 items', () => {
        cy.get('dl.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4>div').should('have.length', 4)
    })
    it('Check if "Recent activity" report exists', () => {
        cy.get('h2').contains('Recent activity').should('have.class', 'font-semibold', 'leading-6')
    })
    it('Check if "Recent clients" report exists', () => {
        cy.get('h2').contains('Recent clients').should('have.class', 'font-semibold', 'leading-6')
    })
});

describe('Team', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
            cy.visit('http://localhost:4200/team')
        })
    });

    it('Check for main title', () => {
        cy.get('h2').contains(data.team.title).should('have.class', 'text-3xl', 'font-bold')
    })
    it('Check for main description', () => {
        cy.get('p').contains(data.team.description).should('have.class', 'text-lg', 'leading-8')
    })
    it('Check if main leadership board exists', () => {
        cy.get('ul.gap-x-8[role="list"]').should('exist')
    })
});

describe('Projects', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
            cy.visit('http://localhost:4200/projects')
        })
    });

    it('Check for main title', () => {
        cy.get('h2').contains(data.projects.title).should('have.class', 'leading-6', 'text-gray-900')
    })
    it('Check for main description', () => {
        cy.get('p').contains(data.projects.description).should('have.class', 'text-sm', 'text-gray-500')
    })
    it('Check if projects have 6 sections', () => {
        cy.get('ul.grid[role="list"]').find('li').should('have.length', 6)
    })
});

describe('Calendar', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
            cy.visit('http://localhost:4200/calendar')
        })
    });

    it('Check for main title', () => {
        cy.get('h2').contains('Upcoming meetings').should('have.class', 'leading-6', 'text-gray-900')
    })
    it('Check if calendar header exists', () => {
        cy.get('#calendar').find('#header').should('exist')
    })
    it('Check if calendar weeks exists', () => {
        cy.get('#calendar').find('#weeks').should('exist')
        cy.get('#calendar').find('#weeks').find('div').should('have.length', 7)
    })
    it('Check if calendar days exists', () => {
        cy.get('#calendar').find('#days').should('exist')
        cy.get('#calendar').find('#days').find('button').should('have.length', 42)
    })
    it('Check if we can add new event', () => {
        cy.get('#calendar').find('button').contains('Add event').should('exist').should('not.be.disabled')
    })
    it('Check if we have meetings', () => {
        cy.get('ol[role="listbox"]').should('exist')
    })
    it('Check if we have no more than 5 meetings on initial load', () => {
        cy.get('ol[role="listbox"]').find('li').should('have.length', 5)
    })
});

describe('Documents', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
            cy.visit('http://localhost:4200/documents')
        })
    });

    it('Check for main title', () => {
        cy.get('h2').contains(data.documents.title).should('have.class', 'leading-6', 'text-gray-900')
    })
    it('Check for main description', () => {
        cy.get('p').contains(data.documents.description).should('have.class', 'text-sm', 'text-gray-500')
    })
    it('Check if we can enter email to invite', () => {
        cy.get('input#emails[name="emails"]').should('exist').should('not.be.disabled')
    })
    it('Check if role selection exists', () => {
        cy.get('select#role[name="role"]').should('exist').should('not.be.disabled')
    })
    it('Check if we can select one of any role', () => {
        cy.get('select#role[name="role"]').select('Can edit', { force: true }).should('exist').should('not.be.disabled')
        cy.get('select#role[name="role"]').select('Can view', { force: true }).should('exist').should('not.be.disabled')
    })
    it('Check if we can send invitation', () => {
        cy.get('button[type="submit"]').contains('Send invite').should('exist').should('not.be.disabled')
    })
    it('Check if "Recommended team members" exists', () => {
        cy.get('h3').contains('Recommended team members').should('exist')
        cy.get('ul.grid[role="list"]').should('exist')
    })
    it('Check if we have no more than 6 recommended team members on initial load', () => {
        cy.get('ul.grid[role="list"]').find('li').should('have.length', 6)
    })
});

describe('Reports', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
            cy.visit('http://localhost:4200/reports')
        })
    });

    it('Check if pinned projects exists', () => {
        cy.get('h2').contains('Pinned Projects').should('have.class', 'text-sm', 'text-gray-50')
        cy.get('ul.grid[role="list"]').should('exist')
    })
    it('Check if we have no more than 6 pinned projects on initial load', () => {
        cy.get('ul.grid[role="list"]').find('li').should('have.length', 6)
    })
    it('Check if we have users table', () => {
        cy.get('table').should('exist')
        cy.get('table').find('thead').should('exist')
        cy.get('table').find('tbody').should('exist')
    })
    it('Check if users table has 5 columns', () => {
        cy.get('table').find('thead').find('tr').find('th').should('have.length', 5)
    })
    it('Check if we have no more than 6 users on initial load', () => {
        cy.get('table').find('tbody').find('tr').should('have.length', 6)
    })
});

describe('Learning', () => {
    let data: HomeDataType
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.fixture('home').then((home) => {
            data = home;
            cy.get('input[name="email"]').type(data.auth.email)
            cy.get('input[name="password"]').type(data.auth.password)
            cy.get('button[type="submit"]').click()
            cy.visit('http://localhost:4200/learning')
        })
    });

    it('Forms exists', () => {
        cy.get('h2').contains('Forms').should('have.class', 'leading-6', 'text-gray-900')
        cy.get('p').contains(data.learning.forms).should('exist')
    })
    it('Check if have Template driven and Reactive forms', () => {
        cy.get('ul.grid[role="list"]').should('exist')
        cy.get('app-learning-forms>div>ul.grid[role="list"]>li.flow-root').should('have.length', 2)
        cy.get('ul.grid[role="list"]').find('span').contains('Template-Driven Forms').should('exist')
        cy.get('ul.grid[role="list"]').find('span').contains('Reactive Forms').should('exist')
    })
    it('Pipes exists', () => {
        cy.get('h2').contains('Pipes').should('have.class', 'leading-6', 'text-gray-900')
        cy.get('p').contains(data.learning.pipes).should('exist')
    })
    it('Http exists', () => {
        cy.get('h2').contains('Pipes').should('have.class', 'leading-6', 'text-gray-900')
        cy.get('p').contains(data.learning.http).should('exist')
    })
});