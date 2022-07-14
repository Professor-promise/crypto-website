import React from 'react';
import { servicesCardContent } from '../shared/data';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServiceP,
  ServicesIcon,
} from './ServicesElements';

const Service = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {servicesCardContent?.map(({ id, heading, text, Icon }) => (
          <ServicesCard key={id}>
            <ServicesIcon src={Icon} />
            <ServicesH2>{heading}</ServicesH2>
            <ServiceP>{text}</ServiceP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Service;
