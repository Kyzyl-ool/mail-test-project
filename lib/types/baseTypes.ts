type Size1 = 'small';
type Size2 = 'medium';
type Size3 = 'large';
type Size4 = 'huge';

export type BaseTripleSizeType = Size1 | Size2 | Size3;
export type BaseQuadrupleSizeType = BaseTripleSizeType | Size4;
