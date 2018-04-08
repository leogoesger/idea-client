import {PortfolioTypes as types} from '../action-types';

const fetchPortfolioObjects = portfolios => {
  return {
    type: types.FETCH_PORTFOLIO_OBJECTS,
    portfolios,
  };
};

const updatePortfolioObject = (portfolio, portfolioType) => {
  return {
    type: types.UPDATE_PORTFOLIO_OBJECTS,
    portfolio,
    portfolioType,
  };
};

export function fetchPortfolios() {
  const portfolios = {
    researchAndEvaluation: {
      name: 'Research and Evaluation Reports',
      data: [
        {
          title:
            'Wyoming Mental Health and Substance Abuse Services Division Gaps Analysis Report 2010',
          url: 'https://google.com',
        },
        {
          title:
            'Wyoming Mental Health and Substance Abuse Services Division Title 25 Report',
          url: 'https://google.com',
        },
        {
          title: 'Wyoming Gaps Analysis Report 2006: Mental Health Services',
          url: 'https://google.com',
        },
        {
          title: 'Wyoming Gaps Analysis Report 2006: Substance Abuse Services',
          url: 'https://google.com',
        },
        {
          title:
            'CA Independent Assessment for Health Care Financing Agency (HCFA)',
          url: 'https://google.com',
        },
        {
          title:
            'WA Independent Assessment for Health Care Financing Agency (HCFA)',
          url: 'https://google.com',
        },
        {
          title: 'California Medi-Cal County Profile Report',
          url: 'https://google.com',
        },
        {
          title: 'California QIC Timeliness Special Study',
          url: 'https://google.com',
        },
        {title: 'IMD Evaluation Study', url: 'https://google.com'},
        {title: 'Latino Access Study', url: 'https://google.com'},
        {
          title: "Mendocino County Children's System of Care Report",
          url: 'https://google.com',
        },
        {
          title: 'Performance Improvement Projects (PIP)',
          url: 'https://google.com',
        },
        {
          title:
            'Sacramento County Adult Mental Health Services Independent Expert Review Report',
          url: 'https://google.com',
        },
      ],
    },
    mentalHealthService: {
      name: 'Mental Health Services Act Materials',
      data: [
        {
          title: 'Community Services and Supports Plan (CSS)',
          url: 'https://google.com',
        },
        {
          title: 'Full-Service Partnership Intake Process',
          url: 'https://google.com',
        },
        {
          title: 'Mental Health Services Act (MHSA) Annual Updates',
          url: 'https://google.com',
        },
        {
          title: 'Community Services and Supports Plans (CSS)',
          url: 'https://google.com',
        },
        {
          title: 'Prevention and Early Intervention Plans (PEI)',
          url: 'https://google.com',
        },
        {title: 'Cultural Competence Plans (CCP)', url: 'https://google.com'},
        {
          title: 'Workforce Education and Training Plans (WET)',
          url: 'https://google.com',
        },
      ],
    },
    dataModels: {
      name: 'Data Models',
      data: [
        {
          title: 'Glenn County, CA - Time to First Appointment',
          url: 'https://google.com',
        },
        {title: 'Wyoming - Performance Measures', url: 'https://google.com'},
        {
          title: 'Glenn County, CA – Monthly Multi-Agency Planning Data Report',
          url: 'https://google.com',
        },
        {
          title: 'Glenn County, CA - Children’s System of Care Annual Report',
          url: 'https://google.com',
        },
      ],
    },
    logicModels: {
      name: 'Logic Models',
      data: [
        {
          title: 'Glenn County, CA - Children’s System of Care',
          url: 'https://google.com',
        },
      ],
    },
    plans: {
      name: 'Plans',
      data: [
        {title: 'Cultural Competence Plan', url: 'https://google.com'},
        {title: 'Medi-Cal Compliance Plan', url: 'https://google.com'},
        {
          title: 'Substance Abuse and Crime Prevention Act (SACPA) Plan',
          url: 'https://google.com',
        },
        {title: 'Quality Improvement Plan', url: 'https://google.com'},
      ],
    },
    forms: {
      name: 'Forms',
      data: [
        {
          title: 'Cross-Cultural Clinical Assessment',
          url: 'https://google.com',
        },
        {
          title:
            'Flow Chart for Glenn County, CA Children’s System of Care Intake Process',
          url: 'https://google.com',
        },
      ],
    },
    policiesAndProcedures: {
      name: 'Policies and Procedures',
      data: [
        {
          title: 'Behavioral Health Policies and Procedures',
          subtitle: [
            {title: 'Code of Ethics', url: 'https://google.com'},
            {
              title: 'Violence and Threats of Violence',
              url: 'https://google.com',
            },
            {title: 'Quality Improvement Committee', url: 'https://google.com'},
            {title: 'Usual Incident Reporting', url: 'https://google.com'},
          ],
        },
        {
          title: 'Mental Health Policies and Procedures',
          subtitle: [
            {title: 'Intake and Assessment', url: 'https://google.com'},
            {title: 'HIPAA', url: 'https://google.com'},
            {title: 'Medi-Cal Billing Processes', url: 'https://google.com'},
            {title: 'Release of Information', url: 'https://google.com'},
          ],
        },
        {
          title: 'Substance Abuse Policies and Procedures',
          subtitle: [
            {title: 'Intake and Assessment', url: 'https://google.com'},
            {title: 'Perinatal Programs', url: 'https://google.com'},
            {title: 'Prevention', url: 'https://google.com'},
            {title: 'Early Intervention', url: 'https://google.com'},
            {title: 'SAPT Block Grant Funding', url: 'https://google.com'},
            {title: 'Youth Treatment', url: 'https://google.com'},
            {title: 'Prop 36', url: 'https://google.com'},
            {title: 'Non-Discrimination', url: 'https://google.com'},
          ],
        },
      ],
    },
    grants: {
      name: 'Grants',
      data: [
        {
          title:
            "Substance Abuse and Mental Health Services Administration (SAMHSA) Children's System of Care Grant (Glenn County) (2002)",
          url: 'https://google.com',
        },
        {
          title:
            'Northern California Regional Partnership for Safe and Stable Families (Butte County, Lake County, Tehama County, Trinity County) (2007)',
          url: 'https://google.com',
        },
        {
          title:
            'Grant to Reduce Alcohol Abuse (GRAA) (San Benito County) (2008)',
          url: 'https://google.com',
        },
        {
          title:
            'Substance Abuse and Mental Health Services Administration (SAMHSA) Primary and Behavioral Health Care Integration Project (Glenn County) (2009)',
          url: 'https://google.com',
        },
      ],
    },
  };

  return dispatch => {
    dispatch(fetchPortfolioObjects(portfolios));
  };
}

export function addPortfolio(portfolio, portfolioType) {
  return dispatch => {
    dispatch(updatePortfolioObject(portfolio, portfolioType));
  };
}

export function editPortfolio(portfolio, portfolioType) {
  return dispatch => {
    dispatch(updatePortfolioObject(portfolio, portfolioType));
  };
}

export function deletePortfolio(portfolio, portfolioType) {
  return dispatch => {
    dispatch(updatePortfolioObject(portfolio, portfolioType));
  };
}
