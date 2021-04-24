import { keyframes, Keyframes } from "styled-components";

const fadeInAnimation: Keyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export class Animations {
  static fadeIn = fadeInAnimation;
}
