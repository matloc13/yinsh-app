import { useState } from 'react';

const useCheckStraightLine = () => {
    const [result, setResult] = useState(false);

    const checkStraightline = (v, x, y) => {
        let lidy = Number(v.last.split('--')[1].replace('y', ''), 10);
        // console.log('lidy x y', lidy, x, y);
        if (v.last.match(`x1--y`)) {
            switch (x) {
                case 1:
                    return setResult(true);
                case 2:
                    switch (y) {
                        case 4:
                            return setResult(false);
                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            return setResult(false);
                        default:
                            return;
                    }

                case 3:
                    switch (y) {
                        case 4:
                            return setResult(false);
                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 4:
                    switch (y) {
                        case 2:
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            return setResult(false);

                        case 8:
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    return setResult(false);
            }
            return result;
        }
        if (v.last.match(`x2--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    return setResult(true);
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x3--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    return setResult(true);

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x4--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    return setResult(true);

                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 2) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 2 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 2 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 2 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 4 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x5--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 18 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    return setResult(true);

                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 18 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 2 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 2 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 2 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x6--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 2 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 2) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 2) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    return setResult(true);

                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 2) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 2 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x7--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 2 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 18 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    return setResult(true);

                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 18 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 20) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x8--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 2 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 4 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 2 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 2 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 2 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 2) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    return setResult(true);

                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
            }
            return result;
        }
        if (v.last.match(`x9--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 2 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    return setResult(true);
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x10--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 4) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 16) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 10:
                    return setResult(true);

                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                    }
            }
            return result;
        }
        if (v.last.match(`x11--y`)) {
            switch (x) {
                case 1:
                    return setResult(false);
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            return setResult(false);

                        case 8:
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            return setResult(false);
                        case 16:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }

                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            return setResult(false);
                        case 14:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 20:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 4:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            return setResult(false);
                        case 12:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 20:
                            return setResult(false);
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            return setResult(false);
                        case 4:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 6:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 8:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            return setResult(false);
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            return setResult(false);
                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 18:
                            return setResult(false);
                        default:
                            return;
                    }

                case 10:
                    switch (y) {
                        case 4:
                            return setResult(false);
                        case 6:
                            if (lidy === 8) {
                                return setResult(true);
                            }
                            return setResult(false);

                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 14:
                            if (lidy === 14) {
                                return setResult(true);
                            }
                            return setResult(false);
                        case 16:
                            return setResult(false);
                        default:
                            return;
                    }
                case 11:
                    return setResult(true);
            }
        }
        return result;
    };
    return { result, checkStraightline };
};

export default useCheckStraightLine;
