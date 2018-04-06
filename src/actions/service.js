import {ServiceTypes as types} from '../action-types';

const fetchServiceObjects = services => {
  return {
    type: types.FETCH_SERVICE_OBJECTS,
    services,
  };
};

const updateServiceObject = (service, serviceType) => {
  return {
    type: types.UPDATE_SERVICE_OBJECTS,
    service,
    serviceType,
  };
};

export function fetchServices() {
  const services = {
    overviewServices: {
      description:
        'I.D.E.A. Consulting’s services are available on-site, and through telephone and e-mail consultation. Our services are offered on an hourly, per-project, or contract basis. These services include, but are not limited to:',
      services: [
        'Mental Health Services Act (MHSA) program design, implementation, evaluation, and reporting;',
        'Project management and support;',
        'External Quality Review (EQR) and Medicaid Audit preparation and support;',
        'Performance Improvement Projects (PIPs);',
        'Quality improvement support;',
        'Cultural Competence Plans and training;',
        'Policy and procedure development for adherence to state and federal requirements;',
        'Document development and production (e.g., reports, forms, instruments, brochures);',
        'System-level analysis and program evaluation;',
        'Special study design, direction, analysis, and presentation;',
        'Statistical analysis (SAS) of MIS systems and other service utilization data;',
        'Data modeling for management decision support;',
        'Staff training, development, and recruitment;',
        'Presentation development and delivery; and',
        'Grant writing, implementation, administration, and evaluation.',
      ],
    },
    stateServices: [
      {
        description: 'Gaps Analysis',
        services: [
          'Conduct Gaps Analysis of Mental Health Services',
          'Conduct Gaps Analysis of Substance Abuse Services',
        ],
      },

      {
        description: 'Performance Indicators and Outcome Measures',
        services: [
          'Design, collect, analyze, and implement Performance Indicators and Outcome Measures to demonstrate county, region, and State performance',
        ],
      },

      {
        description: 'State Database Analysis',
        services: [
          'Analyze State databases (Medicaid and non-Medicaid) to measure access, quality, and cost-effectiveness',
        ],
      },

      {
        description: 'Independent Assessments',
        services: [
          'Conduct Independent Assessments (1915b Waiver Requirements) for the Center for Medicaid and Medicare Services (CMS)',
        ],
      },

      {
        description: 'Data Infrastructure Grant (DIG)',
        services: [
          'Plan, design, and implement Data Infrastructure Grant (DIG) activities to meet SAMHSA and Center for Mental Health Services (CMHS) requirements for reporting Uniform Reporting System (URS) Tables and National Outcome Measures (NOMs)',
        ],
      },

      {
        description: 'Quality Improvement Activities',
        services: [
          'Develop and implement Quality Improvement activities',
          'Analyze data to improve services',
          'Produce special research reports',
          'Plan, design, and implement Performance Improvement Projects (PIPs)',
        ],
      },

      {
        description: 'Medicaid Compliance',
        services: [
          'Evaluate compliance with Medicaid (Medi-Cal) regulations, including compliance with documentation standards and Office of Inspector General (OIG) Requirements',
        ],
      },

      {
        description:
          'Rehabilitation Option Requirements for County Medicaid Services',
        services: [
          'Plan Rehabilitation Option requirements for county Medicaid services',
          'Develop manuals to define county requirements',
        ],
      },

      {
        description: 'Evaluations of Special Projects',
        services: [
          'Conduct special research studies (ex. Children’s System of Care and Quality Improvement Projects',
          'Evaluate Pilot Projects and Research Studies',
        ],
      },

      {
        description: 'Consumer and Family Empowerment',
        services: [
          'Develop reports and materials for consumers and families to help them understand client access, service utilization, and cost of services',
          'Present information to promote recovery and resilience',
        ],
      },
    ],
    countyServices: [
      {
        description: 'Mental Health Services Act (MHSA)',
        services: [
          'Write and develop plans (Community Services and Supports; Prevention and Early Intervention; Workforce Education and Training)',
          'Coordinate planning efforts to meet MHSA requirements',
          'Facilitate stakeholder focus groups',
          'Train staff and clients',
          'Promote recovery-based services',
          'Develop logic models',
          'Plan and implement Full Service Partnership requirements',
          'Collect and analyze outcomes',
        ],
      },
      {
        description: 'Quality Leadership (Improvement) Activities',
        services: [
          'Coordinate Planning Efforts',
          'Develop Quality Improvement Committee (QIC) plans and policies and procedures',
          'Train staff',
          'Collect and analyze data to improve services',
          'Conduct studies to inform stakeholders',
          'Collect and analyze youth, consumer, and family surveys',
        ],
      },
      {
        description: 'Cultural Competence Plans and Latino Access Studies',
        services: [
          'Develop Cultural Competence Plans',
          'Conduct Latino Access Studies',
          'Coordinate planning',
          'Train staff and stakeholders',
        ],
      },
      {
        description: 'Annual External Quality Reviews',
        services: [
          'Assist staff to prepare for External Quality Reviews (EQR)',
          'Develop and implement PIPs',
          'Prepare materials and policies to meet EQR requirements',
        ],
      },
      {
        description: 'Medicaid (Medi-Cal) Compliance Reviews',
        services: [
          'Assist staff to prepare for Medicaid (Medi-Cal) Compliance Reviews',
          'Plan and develop policies and procedures',
          'Develop forms',
          'Train staff',
        ],
      },

      {
        description: 'SAMHSA Children’s System of Care',
        services: [
          'Write Substance Abuse and Mental Health Services Administration (SAMHSA) Federal Grant',
          'Design, implement, and evaluate System of Care Program',
          'Provide Evaluation Support (Local Evaluation and National Evaluation)',
          'Collect and analyze data to inform stakeholders',
          'Develop social marketing tools',
          'Develop logic models',
          'Develop instruments to measure risk and resiliency in children, youth, and families',
          'Facilitate the development of services for Transition Age Youth',
        ],
      },

      {
        description: 'Compliance Plans',
        services: [
          'Plan, develop, and write compliance plan',
          'Develop policies and procedures to ensure compliance activities',
        ],
      },

      {
        description: 'HIPAA',
        services: [
          'Facilitate adherence with HIPAA requirements',
          'Plan, develop, write policies and procedures to ensure compliance with HIPAA requirements',
          'Train staff',
        ],
      },

      {
        description: 'Wellness and Recovery Centers',
        services: [
          'Design and implement Wellness and Recovery Centers',
          'Train staff',
        ],
      },

      {
        description: 'Grants',
        services: [
          'Safe and Drug Free Schools and Communities',
          'Strategic Prevention Plan',
          'SACPA Plan (Prop 36)/Offender Treatment Program',
          'Promoting Safe and Stable Families',
          'SAMHSA CMHS Children’s System of Care',
          'First Five Commission',
          'MIOCR',
        ],
      },

      {
        description: 'Outcomes and Performance Measures',
        services: [
          'Develop Practice Guidelines',
          'Develop Best Practice Models',
          'Design, collect, and analyze data to measure staff performance',
          'Design, collect, and analyze data to measure client outcomes',
        ],
      },
    ],
  };

  return dispatch => {
    dispatch(fetchServiceObjects(services));
  };
}

export function addService(services, serviceType) {
  return dispatch => {
    dispatch(updateServiceObject(services, serviceType));
  };
}

export function editService(service, serviceType) {
  return dispatch => {
    dispatch(updateServiceObject(service, serviceType));
  };
}

export function deleteService(services, serviceType) {
  return dispatch => {
    dispatch(updateServiceObject(services, serviceType));
  };
}
