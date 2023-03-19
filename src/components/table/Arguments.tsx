import React, {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  TableHTMLAttributes,
} from 'react'

export interface IArgumentsTable extends TableHTMLAttributes<HTMLTableElement> {
  _arguments: Array<any>
}

const ArgumentsTable = forwardRef(
  (
    props: PropsWithChildren<IArgumentsTable>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    const { _arguments, ...rest } = props

    return (
      <div className="table__wrapper">
        <table ref={ref} {...rest}>
          <thead>
            <tr>
              {Object.keys(_arguments[0]).map((key) => (
                <th
                  style={{
                    textAlign: 'left',
                  }}
                  key={key}
                >
                  {String(key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {_arguments.map((_argument) => (
              <tr>
                {Object.values(_argument).map((key: any) => (
                  <td>{String(key)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
)

export { ArgumentsTable }
