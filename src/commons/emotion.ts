import memoize from '@emotion/memoize';
import isPropValid from '@emotion/is-prop-valid';

export function makeShouldForwardProp(props: string[] = []) {
  const re = new RegExp(`^(${props.join('|')})$`);
  return memoize((prop: string) => isPropValid(prop) && !re.test(prop));
}

export const shouldForwardProp = makeShouldForwardProp();
