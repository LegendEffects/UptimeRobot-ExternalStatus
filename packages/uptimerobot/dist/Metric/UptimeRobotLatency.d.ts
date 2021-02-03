import IMetricRange from '@statusify/core/dist/Metric/IMetricRange';
import ILatencyMetricRecord from '@statusify/core/dist/Metric/ILatencyMetricRecord';
import UptimeRobotCore from '..';
import { GenericUptimeRobotMetric, UptimeRobotGenericMetricCParams } from './GenericUptimeRobotMetric';
export default class UptimeRobotLatency extends GenericUptimeRobotMetric<ILatencyMetricRecord> {
    private readonly getLatency;
    constructor(urc: UptimeRobotCore, params: UptimeRobotGenericMetricCParams);
    getPeriod(range: IMetricRange): Promise<ILatencyMetricRecord[]>;
    getAverage(range: IMetricRange): Promise<ILatencyMetricRecord>;
    private pullNewData;
}