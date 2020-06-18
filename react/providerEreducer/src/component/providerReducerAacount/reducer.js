import * as countType from "./type";

export default function(count, action) {
  switch (action.type) {
    case countType.INCREMENT:
      return (count += action.payload.value);
    case countType.CLEAN:
      return (count = 0);
    default:
      break;
  }
}
