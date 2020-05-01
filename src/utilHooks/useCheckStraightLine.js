import { useState } from 'react';

const useCheckStraightLine = () => {
    const [result, setResult] = useState(false);

    const checkStraightline = (v, x, y) => {
        let lidy = Number(v.last.replace('x1--y', ''), 10);
        // console.log('lidy', lidy);
        if (v.last.match(`x1--y`)) {
            switch (x) {
                case 1:
                    return true;
                case 2:
                    switch (y) {
                        case 4:
                            return false;
                        case 6:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 16:
                            return false;
                        default:
                            return;
                    }

                case 3:
                    switch (y) {
                        case 4:
                            return false;
                        case 6:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 4:
                    switch (y) {
                        case 2:
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 18:
                            return false;
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;

                        case 20:
                            return false;
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            return false;
                        case 12:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            return false;
                        case 12:
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;

                        case 20:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 8:
                            return false;
                        case 10:
                            return false;
                        case 12:
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;

                        case 8:
                            return false;
                        case 10:
                            return false;
                        case 12:
                            return false;
                        case 14:
                            return false;
                        case 16:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 6:
                            return false;

                        case 8:
                            return false;
                        case 10:
                            return false;
                        case 12:
                            return false;
                        case 14:
                            return false;
                        case 16:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 11:
                    return false;
                default:
                    return;
            }
        }
        if (v.last.match(`x2--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;

                        default:
                            return;
                    }
                case 2:
                    return true;
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return true;
                            }
                        case 4:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 20:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;

                        case 20:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        case 10:
                            return false;
                        case 12:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        case 10:
                            return false;
                        case 12:
                            return false;
                        case 14:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                    }
                default:
                    return;
            }
        }
        if (v.last.match(`x3--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return true;
                            }
                            return false;

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 3:
                    return true;

                case 4:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return true;
                            }
                        case 4:
                            if (lidy === 4 || lidy === 6) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 6 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 14 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 16 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 18) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 20:
                            if (lidy === 18) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 4 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 6 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;

                        case 20:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 4 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 4 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 18) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                    }
                default:
                    return;
            }
        }
        if (v.last.match(`x4--y`)) {
            switch (x) {
                case 1:
                    switch (y) {
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return true;
                            }
                            return false;

                        default:
                            return;
                    }
                case 2:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 6) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 3:
                    switch (y) {
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }

                case 4:
                    return true;

                case 5:
                    switch (y) {
                        case 2:
                            if (lidy === 2) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 2 || lidy === 4) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 4 || lidy === 6) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 6 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 16 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 20:
                            if (lidy === 18) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 6:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 4 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 6 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 8 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 10 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 12 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 14 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 7:
                    switch (y) {
                        case 2:
                            if (lidy === 4) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 2 || lidy === 8) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 4 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;

                        case 20:
                            if (lidy === 16) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 8:
                    switch (y) {
                        case 2:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;

                        case 6:
                            if (lidy === 2 || lidy === 10) {
                                return true;
                            }
                            return false;
                        case 8:
                            if (lidy === 4 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 6 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 8 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 10 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 9:
                    switch (y) {
                        case 4:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy === 2 || lidy === 12) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 4 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 6 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 8 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 18:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 10:
                    switch (y) {
                        case 4:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        case 6:
                            if (lidy === 12) {
                                return true;
                            }
                            return false;

                        case 8:
                            if (lidy == 2 || lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 4 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 6 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 8) {
                                return true;
                            }
                            return false;
                        case 16:
                            if (lidy === 10) {
                                return true;
                            }
                            return false;
                        default:
                            return;
                    }
                case 11:
                    switch (y) {
                        case 8:
                            if (lidy === 14) {
                                return true;
                            }
                            return false;
                        case 10:
                            if (lidy === 2 || lidy === 16) {
                                return true;
                            }
                            return false;
                        case 12:
                            if (lidy === 4 || lidy === 18) {
                                return true;
                            }
                            return false;
                        case 14:
                            if (lidy === 6) {
                                return true;
                            }
                            return false;
                    }
                default:
                    return;
            }
        }
    };

    return { result, checkStraightline };
};

export default useCheckStraightLine;
