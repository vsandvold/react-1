import React, { createContext } from 'react';
import { StepsProps } from './props';
import { classNames } from '@chbphone55/classnames';
import { steps as ccSteps } from '@warp-ds/css/component-classes';


export const StepsContext = createContext<{
  horizontal?: boolean;
  right?: boolean;
}>({
  horizontal: undefined,
  right: undefined,
});

export function Steps({horizontal, right, className, children}: StepsProps) {
  return (
    <StepsContext.Provider
      value={{
        horizontal: horizontal,
        right: right,
      }}
    >
      <ul
        className={classNames(className, {
          [ccSteps.steps]: true,
          [ccSteps.stepsHorizontal]: horizontal,
        })}
      >
        {children}
      </ul>
    </StepsContext.Provider>
  );
}
