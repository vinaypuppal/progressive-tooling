/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import styled from 'preact-emotion';

import { forPhoneOnly, forDesktopUp, containerStyle } from 'src/shared';

export const ContainerDiv = styled('div')`
  background-color: ${props => props.theme.backgroundSecondary};
  border-bottom: ${props =>
    props.theme.name === 'primary'
      ? `5px solid ${props.theme.border}`
      : `2px solid ${props.theme.border}`};
  height: 700px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${containerStyle};

  ${forPhoneOnly} {
    margin-top: 65px;
  }
`;

export const LogoContainerDiv = styled('div')`
  display: flex;
  align-items: center;
`;

export const TitleH1 = styled('h1')`
  font-size: 42px;
  margin-left: 15px;
  font-weight: 600;
  color: ${props => props.theme.logo};

  ${forPhoneOnly} {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const DescriptionP = styled('p')`
  margin: 1.5em 0;
  display: block;
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.primaryInverse};
  line-height: 1.5;
  text-align: center;
  width: 80%;

  ${forPhoneOnly} {
    font-size: 16px;
    text-align: center;
  }

  ${forDesktopUp} {
    width: 50%;
  }
`;
